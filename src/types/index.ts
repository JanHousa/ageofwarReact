import { TowerComponentProps } from '../components/TowerComponent';

export interface Unit {
  id: string;
  type: string;
  health: number;
  attack: number;
  cost: number;
  imageUrl: string;
  position: number;
  attackType: 'melee' | 'range';
  range: number;
  isEnemy?: boolean;
  isAttacking?: boolean;
  lastAttackTime: number;
  attackSpeed: number; // Milisekundy
  isBlocked?: boolean; // Přidáno pro blokování jednotek
  maxHealth: number; // Přidáno pro zjištění maximálního zdraví
  goldValue: number; // Přidáno pro zjištění hodnoty zlata
}

export interface Effect {
  id: string;
  type: 'arrow';
  startPosition: { x: number; y: number };
  targetPosition: { x: number; y: number };
  currentPosition: { x: number; y: number };
  speed: number;
}

export interface GameState {
  units: Unit[];
  gold: number;
  health: number;
  playerUnits: Unit[];
  evolutionLevel: number;
  baseColor: string;
  lastSpawnTime: number;
  unitQueue: Unit[];
  enemyUnits: Unit[];
  enemyGold: number;
  enemyEvolutionLevel: number;
  defenseTowers: DefenseTower[];
  unitsByEvolution: UnitsByEvolution;
  effects: Effect[]; // Přidání efektů do stavu
  enemyHealth: number; // Oprava chyby v názvu
  playerTower: TowerComponentProps;
  enemyTower: TowerComponentProps;
  attackingTargets: { towerId: number; unitId: number }[];
}


export interface UnitsByEvolution {
  [level: number]: Unit[];
}

export interface DefenseTower {
  id: number;
  type: 'Catapult' | 'Cannon'; // Example types
  cost: number;
  attack: number;
  range: number;
  position: number;
  imageUrl: string; // Include this line to add the imageUrl property
  slotId?: number; // Přidáno pro správu slotů
  attackSpeed: number; // This line defines how often the tower can attack
  lastAttackTime: number; // This line defines the last time the tower attacked
}

export interface GameState {
  // ostatní pole zůstávají stejná
  defenseTowers: DefenseTower[];
}

