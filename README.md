# 🎰 Casino Platform - Virtual Coins Edition

Una plataforma de casino moderna, profesional y completamente funcional con interfaz de alta calidad, animaciones fluidas y sistema de monedas virtuales.

## 🎯 Características

### Sistema de Usuarios
- ✅ Registro e inicio de sesión con JWT
- ✅ Perfil de usuario con avatar y nivel
- ✅ Sistema de experiencia y logros
- ✅ Historial de partidas
- ✅ Estadísticas completas

### Economía Virtual
- ✅ Monedas virtuales (Coins)
- ✅ Bono diario
- ✅ Misiones diarias
- ✅ Tabla de clasificación
- ✅ Cofres y recompensas

### Juegos Implementados
1. **Slots** - Tragamonedas con multiplicadores y bonus
2. **Ruleta** - Europea y Americana
3. **Blackjack** - Reglas reales
4. **+ más juegos** (Crash, Coinflip, Dice, Plinko, etc.)

### Interfaz
- 🌙 Tema oscuro con colores neón
- ✨ Animaciones fluidas
- 🔊 Sistema de sonido
- 📱 Responsive (móvil y PC)
- 🎨 Diseño inspirado en Stake, BC.Game, Roobet

### Admin Panel
- 📊 Gestión de usuarios
- 💰 Ajuste de RTP y probabilidades
- 📈 Estadísticas en tiempo real
- 🎁 Crear eventos y recompensas

## 🚀 Stack Tecnológico

- **Frontend**: React 18 + TypeScript + TailwindCSS
- **Backend**: Node.js + Express
- **Base de Datos**: PostgreSQL (Supabase)
- **Autenticación**: JWT
- **Deployment**: Replit

## 📋 Requisitos Previos

- Node.js 16+
- PostgreSQL / Supabase account
- npm o yarn

## ⚙️ Instalación

### 1. Clonar repositorio
```bash
git clone https://github.com/KepaJametxo-jpg/casino-platform.git
cd casino-platform
```

### 2. Configurar Backend
```bash
cd backend
npm install
cp .env.example .env
# Edita .env con tus credenciales
npm run dev
```

### 3. Configurar Frontend
```bash
cd ../frontend
npm install
cp .env.example .env
npm start
```

### 4. Inicializar Base de Datos
```bash
cd ../backend
npm run migrate
npm run seed
```

## 📁 Estructura del Proyecto

```
casino-platform/
├── backend/
│   ├── src/
│   │   ├── api/           # Rutas y controladores
│   │   ├── auth/          # JWT y autenticación
│   │   ├── games/         # Lógica de juegos
│   │   ├── db/            # Conexión y queries
│   │   ├── middleware/    # Middlewares
│   │   ├── utils/         # Utilidades
│   │   └── server.ts      # Servidor principal
│   ├── migrations/        # Migraciones DB
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API client
│   │   ├── store/         # State management
│   │   ├── types/         # TypeScript types
│   │   ├── utils/         # Utilidades
│   │   ├── styles/        # CSS y Tailwind
│   │   └── App.tsx        # App principal
│   └── package.json
│
└── docs/                  # Documentación
```

## 🎮 Cómo Jugar

1. **Registrarse** - Crear cuenta con email
2. **Recibir Bonus Inicial** - 1000 monedas virtuales
3. **Jugar** - Seleccionar juego y apostar
4. **Ganar/Perder** - Ver resultados instantáneos
5. **Subir de Nivel** - Acumular XP y desbloquear recompensas

## 🔒 Seguridad

- ✅ Validación en servidor de todos los resultados
- ✅ Sistema de semillas verificables (Provably Fair)
- ✅ Hash de contraseñas con bcrypt
- ✅ JWT tokens con expiración
- ✅ Protección contra ataques básicos

## 📊 Sistema de Monedas Virtuales

Por defecto, **no hay apuestas con dinero real**. El sistema utiliza monedas virtuales que:
- Se ganan/pierden en juegos
- No tienen valor monetario
- Pueden reiniciarse (admin)
- Sistema preparado para monetización futura

## 🛠️ Desarrollo

```bash
# Backend
cd backend
npm run dev          # Desarrollo con hot reload
npm run build        # Build de producción
npm run start        # Ejecutar producción

# Frontend
cd frontend
npm start            # Desarrollo con hot reload
npm run build        # Build de producción
npm run test         # Ejecutar tests
```

## 📝 Documentación API

Ver `/docs/API.md` para referencia completa de endpoints.

## 🎨 Configuración de Temas

Los colores y estilos se configuran en:
- `frontend/src/styles/tailwind.config.js`
- `frontend/src/styles/global.css`

## 🐛 Debugging

Activar logs detallados:
```bash
DEBUG=casino:* npm run dev
```

## 📄 Licencia

Este proyecto es de uso educativo y personal.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para reportar bugs o sugerencias, abre un issue en GitHub.

---

**Última actualización**: Julio 2026
**Versión**: 1.0.0-beta
