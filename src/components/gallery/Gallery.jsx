import './gallery.css';
import { Trans } from 'react-i18next';

import {
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  winwinImg,
} from '../../utils/icons';
import { BoxText } from '../../utils/components';

const Gallery = () => {
  return (
    <div className="gallery-container container">
      <BoxText className="gallery-text">
        {' '}
        <Trans i18nKey="description.part34">
          Achat et enlèvement des marchandises dans la semaine
        </Trans>
      </BoxText>
      <div className="flexy">
        <img src={galleryImg1} alt="" style={{ width: '300px' }} />
      </div>

      <div className="flexy hidden-1">
        <img src={galleryImg2} alt="" style={{ width: '300px' }} />
      </div>

      <div className="flexy hidden-1">
        <img src={galleryImg3} alt="" style={{ width: '300px' }} />
      </div>

      <div className="flexy baff">
        <img src={galleryImg4} alt="" style={{ width: '300px' }} />
      </div>
      <BoxText className="gallery-text ">
        <Trans i18nKey="description.part35">On vous répond sous moins de</Trans>
        <span> 48h </span>
      </BoxText>

      <BoxText className="gallery-text final">
        <Trans i18nKey="description.part36">
          Rachat de la totalité des stocks
        </Trans>
      </BoxText>
      <img src={winwinImg} alt="" className=" flexy final" />
      <div className="flexy hidden-1 final">
        <img src={galleryImg5} alt="" style={{ width: '300px' }} />
      </div>
    </div>
  );
};

export default Gallery;
