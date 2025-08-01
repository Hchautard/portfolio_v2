'use client';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

export default function DynamicGrid() {
  const layouts = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 4, h: 2 },
      { i: 'b', x: 4, y: 0, w: 4, h: 2 },
      { i: 'c', x: 8, y: 0, w: 4, h: 2 },
    ],
    md: [
      { i: 'a', x: 0, y: 0, w: 3, h: 2 },
      { i: 'b', x: 3, y: 0, w: 3, h: 2 },
      { i: 'c', x: 6, y: 0, w: 3, h: 2 },
    ],
    sm: [
      { i: 'a', x: 0, y: 0, w: 2, h: 2 },
      { i: 'b', x: 2, y: 0, w: 2, h: 2 },
      { i: 'c', x: 4, y: 0, w: 2, h: 2 },
    ],
    xs: [
      { i: 'a', x: 0, y: 0, w: 1, h: 2 },
      { i: 'b', x: 1, y: 0, w: 1, h: 2 },
      { i: 'c', x: 2, y: 0, w: 1, h: 2 },
    ],
    xxs: [
      { i: 'a', x: 0, y: 0, w: 1, h: 1 },
      { i: 'b', x: 1, y: 0, w: 1, h: 1 },
      { i: 'c', x: 2, y: 0, w: 1, h: 1 },
    ],
  };

  const layout = {
    lg: [...layouts.lg],
    md: [...layouts.md],
    sm: [...layouts.sm],
    xs: [...layouts.xs],
    xxs: [...layouts.xxs],
  };
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div className="glass-card" key="1">
        1
      </div>
      <div className="glass-card" key="2">
        2
      </div>
      <div className="glass-card" key="3">
        3
      </div>
    </ResponsiveGridLayout>
  );
}
