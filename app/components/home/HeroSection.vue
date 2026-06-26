<template>
  <section
    class="hero relative flex min-h-screen items-center overflow-hidden pt-[72px] max-md:flex-col max-md:justify-center px-15 max-md:px-6 max-[480px]:px-4"
  >
    <div
      class="hero-content relative z-2 max-w-[560px] flex-shrink-0"
      style="flex: 0 0 40%"
    >
      <div class="mb-6 flex items-center gap-3">
        <span class="block h-px w-8 bg-[#333] dark:bg-white opacity-40"></span>
        <span
          class="font-body text-[11px] uppercase tracking-[0.2em]"
          style="color: var(--muted)"
          >Jakarta-based IT Solutions</span
        >
      </div>

      <h1 class="hero-headline">
        <span class="text-[#111] dark:text-white">WE DELIVER</span>
        <span class="hero-gradient-text">BUSINESS VALUE.</span>
      </h1>

      <p
        class="mb-10 max-w-[520px] text-[15px] leading-[1.7]"
        style="color: var(--muted)"
      >
        End-to-end IT solutions for enterprise — from infrastructure and
        cybersecurity to custom software development.
      </p>

      <div class="flex items-center gap-4 max-md:flex-col max-md:items-start">
        <a href="/#services" class="hero-btn-primary">Explore Services </a>
        <a
          href="https://drive.google.com/file/d/1Pu5JPHNetO5B14c6C0Kixc9ObgusUZgv/view"
          target="_blank"
          rel="noopener"
          class="hero-btn-secondary"
        >
          Company Profile
        </a>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <div class="hero-map-glow"></div>

      <ClientOnly>
        <v-chart
          v-if="isMapLoaded"
          class="chart"
          :option="chartOption"
          autoresize
        />

        <template #fallback>
          <div
            class="flex h-full items-center justify-center text-[var(--muted)] text-sm tracking-widest opacity-50 animate-pulse"
          >
            INITIALIZING NETWORK...
          </div>
        </template>
      </ClientOnly>
    </div>

    <div class="hero-stats">
      <div class="flex flex-col items-end max-lg:items-start stat-item">
        <span class="hero-stat-num">12+</span>
        <span class="hero-stat-label">Enterprise Clients</span>
      </div>
      <div class="flex flex-col items-end max-lg:items-start stat-item">
        <span class="hero-stat-num">4</span>
        <span class="hero-stat-label">Core Services</span>
      </div>
      <div class="flex flex-col items-end max-lg:items-start stat-item">
        <span class="hero-stat-num">24/7</span>
        <span class="hero-stat-label">IT Support</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, shallowRef, provide, onMounted } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GeoComponent, TooltipComponent } from "echarts/components";
import { LinesChart, EffectScatterChart } from "echarts/charts";
import * as echarts from "echarts/core";
import VChart, { THEME_KEY } from "vue-echarts";

// Register required ECharts modules
use([
  CanvasRenderer,
  GeoComponent,
  TooltipComponent,
  LinesChart,
  EffectScatterChart,
]);

// Set ECharts theme to dark
provide(THEME_KEY, "dark");

// State variables
const isMapLoaded = ref(false);
const chartOption = shallowRef({});

// Real-world coordinates [Longitude, Latitude]
const geoCoordMap = {
  Jakarta: [106.8456, -6.2088],
  Surabaya: [112.7521, -7.2504],
  Medan: [98.6722, 3.5952],
  Makassar: [119.4327, -5.1476],
  Denpasar: [115.2167, -8.65],
  Banjarmasin: [114.5901, -3.3194],
  Balikpapan: [116.8252, -1.2379],
};

// Format Nodes
const nodeData = Object.keys(geoCoordMap).map((name) => ({
  name: name,
  value: geoCoordMap[name],
}));

// Format Links (Origin -> Destination)
const lineData = [
  { coords: [geoCoordMap["Jakarta"], geoCoordMap["Surabaya"]] },
  { coords: [geoCoordMap["Jakarta"], geoCoordMap["Medan"]] },
  { coords: [geoCoordMap["Jakarta"], geoCoordMap["Makassar"]] },
  { coords: [geoCoordMap["Jakarta"], geoCoordMap["Banjarmasin"]] },
  { coords: [geoCoordMap["Surabaya"], geoCoordMap["Denpasar"]] },
  { coords: [geoCoordMap["Banjarmasin"], geoCoordMap["Balikpapan"]] },
];

onMounted(async () => {
  try {
    // 1. Fetch the GeoJSON from the public folder using Nuxt's $fetch
    const mapData = await $fetch("/map/indonesia-province.json");

    // 2. Register the fetched map data
    echarts.registerMap("indonesia", mapData);

    // 3. Build the chart configuration
    chartOption.value = {
      backgroundColor: "transparent",

      // Map Base Configuration
      geo: {
        map: "indonesia",
        roam: false,
        zoom: 1.2,
        layoutCenter: ["55%", "50%"],
        layoutSize: "100%",
        itemStyle: {
          areaColor: "#0f172a", // Very dark blue/slate
          borderColor: "rgba(56, 189, 248, 0.25)", // Subtle neon blue stroke
          borderWidth: 1,
          shadowColor: "rgba(56, 189, 248, 0.4)",
          shadowBlur: 15,
        },
        emphasis: {
          itemStyle: {
            areaColor: "#1e293b",
            borderColor: "rgba(56, 189, 248, 0.8)",
          },
          label: { show: false },
        },
      },

      series: [
        // The Glowing Network Lines
        {
          type: "lines",
          zlevel: 1,
          effect: {
            show: true,
            period: 3, // Animation speed
            trailLength: 0.5, // Length of the traveling data packet
            color: "#fff",
            symbolSize: 3,
          },
          lineStyle: {
            color: "#38bdf8",
            width: 1.5,
            opacity: 0.3,
            curveness: 0.25, // Smooth arcs over the map
          },
          data: lineData,
        },
        // The Pulsing Nodes (Cities)
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke",
            scale: 5,
            period: 4,
          },
          itemStyle: {
            color: "#38bdf8",
            shadowBlur: 10,
            shadowColor: "#38bdf8",
          },
          data: nodeData,
          symbolSize: function (val, params) {
            // Make the Jakarta Hub larger and pure white so it stands out
            if (params.name === "Jakarta") return 8;
            return 4;
          },
          emphasis: {
            itemStyle: {
              color: "#ffffff",
            },
          },
        },
      ],
    };

    // 4. Reveal the chart
    isMapLoaded.value = true;
  } catch (error) {
    console.error(
      "Failed to load map data from /map/indonesia-province.json:",
      error,
    );
  }
});
</script>

<style scoped>
.hero {
  background: var(--bg);
}

.hero-visual {
  position: relative;
  flex: 1;
  height: 88vh;
  min-height: 540px;
  margin-right: -2vw;
  z-index: 1;
}

.chart {
  width: 100%;
  height: 100%;
}

.hero-map-glow {
  position: absolute;
  left: 65%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  background: radial-gradient(
    ellipse at center,
    rgba(56, 189, 248, 0.08) 0%,
    transparent 60%
  );
  filter: blur(80px);
  pointer-events: none;
  z-index: -1;
}

/* Content fade-up */
.hero-content {
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  z-index: 2;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-headline {
  display: flex;
  flex-direction: column;
  font-family: var(--font-display);
  font-size: clamp(48px, 7vw, 92px);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 24px;
  letter-spacing: -0.03em;
}

.hero-gradient-text {
  background: linear-gradient(180deg, var(--text) 30%, var(--muted) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #ffffff;
  color: #000000;
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.hero-btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.hero-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.hero-btn-secondary:hover {
  border-color: var(--text);
  background-color: var(--red-dim);
  transform: translateY(-1px);
}

.hero-stats {
  position: absolute;
  right: 60px;
  bottom: 60px;
  display: flex;
  gap: 48px;
  z-index: 2;
}

.stat-item {
  border-left: 1px solid var(--border);
  padding-left: 20px;
}

.hero-stat-num {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

.hero-stat-label {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--muted);
  margin-top: 6px;
}

/* Responsive */
@media (max-width: 1280px) {
  .hero-visual {
    flex: 0 0 50%;
    height: 65vh;
    min-height: 400px;
    margin-right: 0;
  }
}
@media (max-width: 1024px) {
  .hero-visual {
    flex: 0 0 42%;
    height: 45vh;
    min-height: 280px;
    margin-right: 0;
    opacity: 0.8;
  }
  .hero-stats {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 60px;
    justify-content: flex-start;
  }
}
@media (max-width: 768px) {
  .hero-visual {
    flex: 0 0 100%;
    height: 320px;
    min-height: auto;
    order: 2;
    opacity: 0.6;
    margin-top: 48px;
  }
  .hero-content {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .hero-headline {
    font-size: clamp(36px, 10vw, 52px);
  }
  .hero-stats {
    gap: 24px;
    flex-wrap: wrap;
  }
  .hero-stat-num {
    font-size: 28px;
  }
}
@media (max-width: 640px) {
  .hero-visual {
    height: 240px;
    opacity: 0.5;
  }
}
</style>
