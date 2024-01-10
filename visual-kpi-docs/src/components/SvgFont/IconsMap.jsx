import selection from '@site/static/font/selection.json';
import SvgFont from '@site/src/components/SvgFont/SvgFont';

export default function IconsMap() {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '10px',
  };

  return (
    <div style={gridContainerStyle}>
      {
        selection.icons.map((icon, index) => (
          <div>
            <SvgFont data={icon} />
            <span>{index}</span>
          </div>
        ))
      }
    </div>
  )
}
