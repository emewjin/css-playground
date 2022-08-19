import React from 'react';
import { faker } from '@faker-js/faker';
import * as styles from './style.css';

export default function Badge() {
  return (
    <div className={styles.container}>
      {MOCK.map(({ name, count }) => (
        <div key={name} className="badge">
          <span className={styles.name}>{name}</span>
          <span className={styles.count}>{count}</span>
        </div>
      ))}
    </div>
  );
}

const MOCK = [...Array(10).keys()].map(() => {
  return {
    name: faker.name.fullName(),
    count: faker.datatype.number(),
  };
});
