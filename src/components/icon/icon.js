import { useEffect, useState } from 'react';

export default function Svg({ path }) {
  const [svg, setSvg] = useState([]);

  useEffect(() => {
    async function loadSvg() {
      const { ReactComponent } = await path;
      setSvg(ReactComponent);
    }

    loadSvg();
  }, [path]);

  return svg;
}
