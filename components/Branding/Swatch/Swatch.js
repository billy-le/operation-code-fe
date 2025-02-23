import { string } from 'prop-types';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';

Swatch.propTypes = {
  colorName: string.isRequired,
  hexCode: string.isRequired,
};

function Swatch({ colorName, hexCode }) {
  return (
    <figure className="border-1 border-solid border-[#333333] p-4 m-6 w-56">
      <ScreenReaderOnly>{`A block of the color ${colorName}`}</ScreenReaderOnly>

      <div className="h-56 mb-4" style={{ backgroundColor: hexCode }} />

      <figcaption>
        <h6>{colorName.toUpperCase()}</h6>
        {hexCode.toUpperCase()}
      </figcaption>
    </figure>
  );
}

export default Swatch;
