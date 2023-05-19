import React from 'react';
import { useSelector } from 'react-redux';

import { levelInfo } from '../../../../../../utils/level-utils';

import './Level.css';

export default function Level() {
  const { experience } = useSelector((state) => state.myUser.entities);
  const { level, progress } = levelInfo(experience);

  return (
    <section className="w-100 df df-c-s i-gap">
      <div className="dashboard-level__circle df df-center">
        <p className="dashboard-level__circle_level">{level}</p>
      </div>
      <div className="dashboard-level__info df-column i-gap">
        <div className="df df-c-s is-gap">
          <p className="dashboard-level__title_text">Уровень {level}</p>
          <span className="dashboard-level__title_divider" />
          <p className="dashboard-level__title_text">{experience} xp</p>
        </div>
        <div className="w-100 df-column i-gap">
          <div className="dashboard-level__line_lines">
            <span className="line-first" />
            <span className="line-second" style={{ width: `${progress}%` }} />
          </div>
          <div className="dashboard-level__line_title df df-c-sb">
            <p>Уровень {level}</p>
            <p>Уровень {level === 10 ? 10 : level + 1}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
