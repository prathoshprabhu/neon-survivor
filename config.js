// ============================================
// THE 99 SURVIVAL - GAME CONFIGURATION
// ============================================

const TILE_SIZE = 64;
let MAP_SIZE = 32;
const MAX_MAP_SIZE = 60; // Reduced from 80
const FOV = Math.PI / 3;
const RENDER_DIST = 8; // Reduced from 10
const RAY_SKIP = 6; // Increased from 4 for better performance

// Performance limits
const MAX_ENEMIES = 8; // Reduced from 10
const MAX_TREES = 10; // Reduced from 15
const MAX_RESOURCES = 15;
const MAX_DIAMONDS = 10;
const TARGET_FPS = 30; // Target 30 FPS for stability
const FRAME_TIME = 1000 / TARGET_FPS;

// Biome System
const BIOMES = {
    forest: { 
        wallColor: [34, 139, 34], 
        floorColor: [124, 205, 124], 
        skyColorDay: '#87ceeb',
        skyColorNight: '#1a3a5c',
        name: 'Green Meadows',
        dayMonster: { name: 'Bunny', color: '#ddccaa', eyeColor: '#ff6699', health: 30, speed: 2.0, damage: 5 },
        nightMonster: { name: 'Wolf', color: '#555566', eyeColor: '#ffcc00', health: 80, speed: 2.2, damage: 20 },
        weight: 40
    },
    darkforest: { 
        wallColor: [0, 100, 0], 
        floorColor: [85, 170, 85], 
        skyColorDay: '#6bb3d9',
        skyColorNight: '#152d4a',
        name: 'Dense Forest',
        dayMonster: { name: 'Fox', color: '#dd6622', eyeColor: '#222222', health: 50, speed: 1.8, damage: 12 },
        nightMonster: { name: 'Bear', color: '#553322', eyeColor: '#ffaa00', health: 150, speed: 1.2, damage: 30 },
        weight: 40
    },
    volcanic: { 
        wallColor: [205, 92, 0], 
        floorColor: [139, 69, 19], 
        skyColorDay: '#ff9966',
        skyColorNight: '#4a1a00',
        name: 'Lava Lands',
        dayMonster: { name: 'FireBird', color: '#ff4400', eyeColor: '#ffff00', health: 60, speed: 2.0, damage: 15 },
        nightMonster: { name: 'Dragon', color: '#cc0000', eyeColor: '#ffcc00', health: 200, speed: 1.5, damage: 35 },
        weight: 10
    },
    frozen: { 
        wallColor: [135, 206, 250], 
        floorColor: [240, 248, 255], 
        skyColorDay: '#b0e0e6',
        skyColorNight: '#1a3050',
        name: 'Ice Kingdom',
        dayMonster: { name: 'PolarBear', color: '#ffffff', eyeColor: '#333333', health: 80, speed: 1.0, damage: 18 },
        nightMonster: { name: 'Yeti', color: '#eeeeff', eyeColor: '#00ccff', health: 250, speed: 1.2, damage: 40 },
        weight: 10
    },
    cave: { 
        wallColor: [105, 105, 105], 
        floorColor: [70, 70, 70], 
        skyColorDay: '#2a2a2a',
        skyColorNight: '#1a1a1a',
        name: 'Crystal Caves',
        dayMonster: { name: 'Bat', color: '#333333', eyeColor: '#ff0000', health: 20, speed: 2.8, damage: 5 },
        nightMonster: { name: 'Spider', color: '#222222', eyeColor: '#ff0000', health: 100, speed: 1.8, damage: 25 },
        hasDiamonds: true,
        hasResources: true,
        weight: 0
    }
};

// Day/Night Cycle
const NIGHTS_TO_WIN = 99;
const DAY_DURATION = 120000;
const NIGHT_DURATION = 120000;
const FULL_CYCLE = DAY_DURATION + NIGHT_DURATION;

// Rescue System
const TOTAL_PEOPLE_TO_SAVE = 5;
const TIME_BONUS_PER_RESCUE = 30000;

// Resources
const RAW_RESOURCES = {
    wood: { name: 'Raw Wood', icon: '🪵', refined: 'plank' },
    stone: { name: 'Raw Stone', icon: '🪨', refined: 'brick' },
    ironOre: { name: 'Iron Ore', icon: '�ite', refined: 'iron' },
    crystal: { name: 'Crystal', icon: '💎', refined: 'gem' }
};

const REFINED_RESOURCES = {
    plank: { name: 'Plank', icon: '🪵', from: 'wood', amount: 2 },
    brick: { name: 'Brick', icon: '🧱', from: 'stone', amount: 2 },
    iron: { name: 'Iron Ingot', icon: '🔩', from: 'ironOre', amount: 3 },
    gem: { name: 'Polished Gem', icon: '💠', from: 'crystal', amount: 1 }
};

// Weapons
const WEAPONS = [
    { id: 0, name: 'Revolver', icon: '🔫', damage: 25, fireRate: 400, ammo: 1, range: 15, unlocked: true, gunType: 'pistol' },
    { id: 1, name: 'Axe', icon: '🪓', damage: 30, fireRate: 500, ammo: 0, range: 2, unlocked: true, melee: true, gunType: 'axe', tool: 'wood' },
    { id: 2, name: 'Pickaxe', icon: '⛏️', damage: 20, fireRate: 500, ammo: 0, range: 2, unlocked: true, melee: true, gunType: 'pickaxe', tool: 'stone' },
    { id: 3, name: 'Knife', icon: '🔪', damage: 50, fireRate: 200, ammo: 0, range: 1.5, unlocked: false, melee: true, gunType: 'knife' },
    { id: 4, name: '.44 Magnum', icon: '💥', damage: 60, fireRate: 600, ammo: 1, range: 18, unlocked: false, gunType: 'pistol' },
    { id: 5, name: 'Rifle', icon: '🔫', damage: 20, fireRate: 100, ammo: 1, range: 20, unlocked: false, gunType: 'rifle' },
    { id: 6, name: 'Sniper', icon: '🎯', damage: 150, fireRate: 1200, ammo: 1, range: 25, unlocked: false, gunType: 'sniper' },
    { id: 7, name: 'Katana', icon: '⚔️', damage: 80, fireRate: 300, ammo: 0, range: 2, unlocked: false, melee: true, gunType: 'katana' },
    { id: 8, name: 'Railgun', icon: '⚡', damage: 200, fireRate: 2000, ammo: 5, range: 30, unlocked: false, gunType: 'railgun' },
];

// Camera System
const CAMERA_MODES = ['first-person', 'third-person', 'drone', 'top-down'];

// Jump Physics
const GRAVITY = 0.5;
const JUMP_POWER = 12;

// Player Skins
const PLAYER_SKINS = {
    default: { name: 'Noob', color: '#ffcc00', accent: '#00a651' },
    neon: { name: 'Pro', color: '#e2231a', accent: '#ffffff' },
    military: { name: 'Builder', color: '#00a651', accent: '#ffcc00' },
    cyber: { name: 'Guest', color: '#888888', accent: '#444444' },
    stealth: { name: 'Admin', color: '#ff6600', accent: '#ffffff' }
};

// Pets
const PETS = {
    common: [
        { id: 'wolf', name: 'Wolf', color: '#888888', glowColor: '#aaaaaa', bonus: { damage: 1.1 }, desc: '+10% DMG' },
        { id: 'cat', name: 'Cat', color: '#ffaa44', glowColor: '#ffcc88', bonus: { speed: 1.15 }, desc: '+15% Speed' },
        { id: 'dog', name: 'Dog', color: '#aa7744', glowColor: '#cc9966', bonus: { health: 1.1 }, desc: '+10% HP' },
        { id: 'fox', name: 'Fox', color: '#ff6633', glowColor: '#ff8855', bonus: { coins: 1.2 }, desc: '+20% Coins' },
    ],
    rare: [
        { id: 'dragon', name: 'Dragon', color: '#22cc44', glowColor: '#44ff66', bonus: { damage: 1.25 }, desc: '+25% DMG' },
        { id: 'phoenix', name: 'Phoenix', color: '#ff4400', glowColor: '#ff8833', bonus: { regen: 1 }, desc: '+1 HP/sec' },
        { id: 'unicorn', name: 'Unicorn', color: '#ff88ff', glowColor: '#ffaaff', bonus: { shield: 1.5 }, desc: '+50% Shield' },
        { id: 'tiger', name: 'Tiger', color: '#ffaa00', glowColor: '#ffcc33', bonus: { crit: 1.2 }, desc: '+20% Crit' },
    ],
    legendary: [
        { id: 'clone', name: 'Clone', color: '#00ffff', glowColor: '#88ffff', bonus: { damage: 1.5, speed: 1.2 }, desc: '+50% DMG +20% Speed' },
        { id: 'cosmic', name: 'Cosmic Dragon', color: '#aa00ff', glowColor: '#cc44ff', bonus: { damage: 1.3, health: 1.3 }, desc: '+30% DMG +30% HP' },
        { id: 'shadow', name: 'Shadow', color: '#222222', glowColor: '#444488', bonus: { speed: 1.4, coins: 1.5 }, desc: '+40% Speed +50% Coins' },
        { id: 'ancient', name: 'Ancient', color: '#886644', glowColor: '#aa8866', bonus: { health: 2, damage: 0.8 }, desc: '+100% HP' },
    ]
};

// Base building
const BASE_EXP_PER_LEVEL = 100;
