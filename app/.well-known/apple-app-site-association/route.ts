const AASA = {
  applinks: {
    apps: [],
    details: [
      {
        appID: 'M6T89CAAJ5.ng.genomatch.app',
        paths: [
          '/reset-password',
          '/reset-password/*',
          '/privacy',
          '/privacy/*',
          '/terms',
          '/terms/*',
          '/support',
          '/support/*',
          '/guidelines',
          '/guidelines/*',
          '/delete-account',
          '/delete-account/*',
        ],
      },
    ],
  },
};

export const dynamic = 'force-static';

export function GET() {
  return new Response(JSON.stringify(AASA, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
