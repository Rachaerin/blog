import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 注意：list 函数需要在 Node.js 环境下运行
    const { blobs } = await list({
      // 可选：按路径前缀过滤，如 'images/'
      // prefix: 'your-folder/', 
      // 可选：限制单次返回数量，默认1000，最大1000[reference:4]
      limit: 1000,
    });
    return NextResponse.json({ blobs });
  } catch (error) {
    console.error('Listing error:', error);
    return NextResponse.json({ error: 'failed to list' }, { status: 500 });
  }
}