import React from 'react';
import { faker } from '@faker-js/faker';
import * as styles from './style.css';

export default function FlexibleEllipsis() {
  return (
    <>
      <h1>Flex 레이아웃에서의 ellipsis</h1>
      <h2>좌측 ellipsis, 우측 고정 레이아웃</h2>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {MOCK.map(({ title, desc }) => (
            <li key={title} className={styles.li}>
              <span className={styles.title}>{title}</span>
              <span className={styles.desc}>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
      <h2>좌측 ellipsis + 고정 텍스트, 우측 고정 레이아웃</h2>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {MOCK.map(({ title, desc }) => (
            <li key={title} className={styles.li}>
              <div className={styles.left}>
                <span className={styles.title}>{title}</span>
                <span className={styles.leftSub}>선택</span>
              </div>
              <span className={styles.desc}>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const MOCK = [...Array(10).keys()].map(() => {
  return {
    title: faker.name.jobTitle(),
    desc: faker.name.jobDescriptor(),
  };
});
