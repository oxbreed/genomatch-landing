#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TARGET="${1:-https://www.genomatch.app}"
REPORT_DIR="$ROOT/security-reports"
STAMP="$(date +%Y%m%d-%H%M%S)"
RULES="$ROOT/.zap/rules.tsv"

mkdir -p "$REPORT_DIR"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required. Install Docker Desktop or run via GitHub Actions."
  exit 1
fi

echo "Running ZAP baseline (Docker) against ${TARGET}"

docker run --rm \
  -v "$REPORT_DIR:/zap/wrk:rw" \
  -v "$RULES:/zap/wrk/rules.tsv:ro" \
  -t ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py \
  -t "$TARGET" \
  -c /zap/wrk/rules.tsv \
  -i -s \
  -r "/zap/wrk/zap-baseline-${STAMP}.html" \
  -J "/zap/wrk/zap-baseline-${STAMP}.json"

echo "Reports:"
echo "  ${REPORT_DIR}/zap-baseline-${STAMP}.html"
echo "  ${REPORT_DIR}/zap-baseline-${STAMP}.json"
