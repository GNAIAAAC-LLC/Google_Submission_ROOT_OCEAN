export const runtime = 'edge';

import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // This simply passes through all requests.
  // You can add logic here if needed.
  return;
}
