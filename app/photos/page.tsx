// app/waterfall/page.tsx
"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Image from "next/image";

// ---------- 类型定义 ----------
interface PhotoItem {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface Position {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface WaterfallLayout {
  positions: Position[];
  totalHeight: number;
}

// ---------- 工具函数 ----------
// 生成模拟数据（实际项目中可替换为 API 调用）
const generateMockPhotos = (count: number = 24): PhotoItem[] => {
  return Array.from({ length: count }, (_, i) => {
    const width = Math.floor(Math.random() * (500 - 300 + 1) + 300);
    const height = Math.floor(Math.random() * (700 - 350 + 1) + 350);
    const picId = Math.floor(Math.random() * 200) + 1;
    return {
      id: i,
      src: `https://picsum.photos/id/${picId}/${width}/${height}`,
      width,
      height,
      alt: `Photo ${i + 1}`,
    };
  });
};

// 计算列数（响应式）
const calcColumns = (
  containerWidth: number,
  minColumnWidth: number,
  gap: number
): number => {
  if (containerWidth <= 0) return 1;
  const columns = Math.floor((containerWidth + gap) / (minColumnWidth + gap));
  return Math.max(1, Math.min(columns, 6)); // 限制最大6列，避免过密
};

// 核心瀑布流布局计算
const computeLayout = (
  photos: PhotoItem[],
  columns: number,
  containerWidth: number,
  gap: number
): WaterfallLayout => {
  if (!photos.length || columns <= 0 || containerWidth <= 0) {
    return { positions: [], totalHeight: 0 };
  }

  const totalGapWidth = gap * (columns - 1);
  const columnWidth = (containerWidth - totalGapWidth) / columns;
  const columnHeights = new Array(columns).fill(0);

  const positions = photos.map((photo) => {
    const aspectRatio = photo.height / photo.width;
    const itemHeight = columnWidth * aspectRatio;

    // 找到最短的列
    let minHeightIndex = 0;
    for (let i = 1; i < columns; i++) {
      if (columnHeights[i] < columnHeights[minHeightIndex]) {
        minHeightIndex = i;
      }
    }

    const top = columnHeights[minHeightIndex];
    const left = minHeightIndex * (columnWidth + gap);
    columnHeights[minHeightIndex] += itemHeight + gap;

    return { top, left, width: columnWidth, height: itemHeight };
  });

  const totalHeight = Math.max(...columnHeights) - gap;
  return { positions, totalHeight };
};

// ---------- 瀑布流相册组件 ----------
interface WaterfallGalleryProps {
  photos: PhotoItem[];
  gap?: number; // 间距（px）
  minColumnWidth?: number; // 最小列宽（px）
  onImageError?: (src: string) => void; // 可选错误回调
}

const WaterfallGallery: React.FC<WaterfallGalleryProps> = ({
  photos,
  gap = 12,
  minColumnWidth = 260,
  onImageError,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // 监听容器宽度变化（使用 ResizeObserver，精准且高效）
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const width = entries[0].contentRect.width;
        setContainerWidth(width);
      }
    });

    resizeObserver.observe(container);
    // 立即获取一次宽度
    setContainerWidth(container.clientWidth);

    return () => resizeObserver.disconnect();
  }, []);

  // 根据容器宽度计算列数
  const columns = useMemo(() => {
    return calcColumns(containerWidth, minColumnWidth, gap);
  }, [containerWidth, minColumnWidth, gap]);

  // 计算布局（依赖 photos、columns、containerWidth、gap）
  const layout = useMemo(() => {
    return computeLayout(photos, columns, containerWidth, gap);
  }, [photos, columns, containerWidth, gap]);

  // 图片加载失败时的占位处理
  const handleImageError = useCallback(
    (src: string) => {
      if (onImageError) onImageError(src);
      // 可在此添加默认占位图逻辑，此处简单console
      console.warn(`图片加载失败: ${src}`);
    },
    [onImageError]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ minHeight: layout.totalHeight }}
    >
      {photos.map((photo, idx) => {
        const pos = layout.positions[idx];
        if (!pos) return null;

        return (
          <div
            key={photo.id}
            className="absolute overflow-hidden rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
              height: pos.height,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
                onError={() => handleImageError(photo.src)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ---------- 主页面组件 ----------
export default function WaterfallPage() {
  const [photos] = useState<PhotoItem[]>(() => generateMockPhotos(36)); // 36张图片展示效果

  return (
    <main>
      <h1 className="font-bold text-2xl mb-4">Photos</h1>
      <p className="mb-5 text-sm text-[#8a8a8a]">
        A collection of moments captured through the lens. <br />
        Beauty, as I see it.
      </p>

      {/* 瀑布流区域 */}
      <div className="bg-white/50 dark:bg-gray-800/30 rounded-md backdrop-blur-sm">
        <WaterfallGallery
          photos={photos}
          gap={12}
          minColumnWidth={260}
          onImageError={(src) => console.warn(`Failed: ${src}`)}
        />
      </div>
    </main>
  );
}
