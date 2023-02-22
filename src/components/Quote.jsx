import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/index.scss';

const Quote = ({
  showUnderline = true,
  componentBackground,
  textBoxBackgroundColor,
  textBoxTextColor,
}) => {
  const {
    brand = '',
    title = '',
    subTitle = '',
    description = '',
    ctaLinks = [],
  } = useContext(ThemeContext);

  return (
    <section className={`background background-color-${componentBackground}`}>
      <div
        className={`brand brand-${brand} textbox-background-${textBoxBackgroundColor}`}
      >
        <div className="column-1">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          {showUnderline ? <hr align="left" /> : null}
        </div>

        <div className="column-2">
          <p className={`textbox-text-${textBoxTextColor}`}>{description}</p>
          <div className="cta">
            {ctaLinks.map((cta) => (
              <a href={cta.link}>{cta.text}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
