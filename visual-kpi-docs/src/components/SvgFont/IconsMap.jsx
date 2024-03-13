import selection from '@site/static/font/selection.json';
import SvgFont from '@site/src/components/SvgFont/SvgFont';

export default function IconsMap() {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '10px',
  };
  console.log(selection.icons[8])

  return (
    <div style={gridContainerStyle}>
      {
        selection.icons.map((icon, index) => (
          <div>
            <SvgFont data={icon} />
            <span> {index} - {icon.properties.name}</span>
          </div>
        ))
      }
    </div>
  )
}
