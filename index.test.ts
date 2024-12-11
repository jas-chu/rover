import { rover, move, onLeft, onRight, onMove } from './index.js';

describe('rover', () => {
  it('should return the correct final positions for the rovers', () => {
    const input = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;

    const output = `1 3 N\n5 1 E\n`;

    expect(rover(input)).toBe(output);
  });

  it('should return ERROR for invalid input', () => {
    expect(rover('5 5')).toBe('ERROR');
  });
});

describe('move', () => {
  it('should move the rover correctly according to instructions', () => {
    expect(move('1 2 N', 'LMLMLMLMM', '5', '5')).toBe('1 3 N');
    expect(move('3 3 E', 'MMRMMRMRRM', '5', '5')).toBe('5 1 E');
  });
});

describe('onLeft', () => {
  it('should rotate the rover to the left correctly', () => {
    expect(onLeft('1 2 N')).toEqual(['1', '2', 'W']);
    expect(onLeft('1 2 W')).toEqual(['1', '2', 'S']);
    expect(onLeft('1 2 S')).toEqual(['1', '2', 'E']);
    expect(onLeft('1 2 E')).toEqual(['1', '2', 'N']);
  });
});

describe('onRight', () => {
  it('should rotate the rover to the right correctly', () => {
    expect(onRight('1 2 N')).toEqual(['1', '2', 'E']);
    expect(onRight('1 2 E')).toEqual(['1', '2', 'S']);
    expect(onRight('1 2 S')).toEqual(['1', '2', 'W']);
    expect(onRight('1 2 W')).toEqual(['1', '2', 'N']);
  });
});

describe('onMove', () => {
  it('should move the rover correctly according to its direction', () => {
    expect(onMove('1 2 N')).toEqual(['1', '3', 'N']);
    expect(onMove('1 2 E')).toEqual(['2', '2', 'E']);
    expect(onMove('1 2 S')).toEqual(['1', '1', 'S']);
    expect(onMove('1 2 W')).toEqual(['0', '2', 'W']);
  });
});