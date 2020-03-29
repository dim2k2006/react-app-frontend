import React from 'react';
import './index.css';
import i18n from '../../../i18n';

const Intro = () => (
  <div className="Intro">
    <div className="Intro__header mb-4">
      <h3 className="text-center">
        {i18n.t('intro.title')}
      </h3>
    </div>

    <div className="Intro__content mb-4">
      <div
        style={{
          width: '100%',
          height: '0',
          paddingBottom: '55%',
          position: 'relative',
        }}
      >
        <iframe
          title="giphy"
          src="https://giphy.com/embed/1MqvxsrhMHrGw"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </div>
      <p><a href="https://giphy.com/gifs/fight-banana-1MqvxsrhMHrGw">via GIPHY</a></p>
    </div>

    <div className="Intro__footer text-center">
      <p>{i18n.t('intro.gratitude')}</p>
    </div>
  </div>
);

export default Intro;
