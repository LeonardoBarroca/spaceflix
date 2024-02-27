<template>
  <div class="cards-area">

    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="pesquisar..." />
    </div>

    <div class="cards-row">
      <h4>Sistema Solar</h4>
      <div class="cards">
        <RouterLink class="card-link" v-for="planet in planetsData" :key="planet.englishName" :to="planet.englishName">
          <div class="card-area">
            <PlanetCard :name="planet.name" :englishName="planet.englishName" :pathBaseColor="planet.pathBaseColor"
              :pathDisplacement="planet.pathDisplacement" :pathRoughness="planet.pathRoughness"
              :pathNormal="planet.pathNormal" />
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="cards-row">
      <h4>Galáxias</h4>
      <div class="cards">
        <RouterLink class="card-link" v-for="galaxy in galaxiesData" :key="galaxy.englishName" :to="galaxy.englishName">
          <GalaxyCard :imagePath="galaxy.imagePath" :name="galaxy.name" />
        </RouterLink>
      </div>
    </div>

    <div class="cards-row">
      <h4>Vídeos</h4>
      <div class="cards">
        <div class="videos-row" v-for="(videoId, index) in videoIds" :key="index">
          <VideoCard :videoId="videoId" :playerId="'player-' + index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanetCard from '../components/PlanetCard.vue'
import planetsData from '../assets/planetsData'
import GalaxyCard from '../components/GalaxyCard.vue'
import galaxiesData from '../assets/galaxiesData'
import VideoCard from '../components/VideoCard.vue'

export default {
  components: { PlanetCard, GalaxyCard, VideoCard },
  data() {
    return {
      localPlanetsData: planetsData,
      localGalaxiesData: galaxiesData,
      search: "",
      videoIds: ['SpcPB_lzCxc', '_T8cn2J13-4', '921VbEMAwwY', 'uD4izuDMUQA', 'egDIqKLt2L4', 'cTQ3Ko9ZKg8', 'wkQuOrsgVGY', 'MlOjSQeO1Dg']
    }
  },
  computed: {
    planetsData() {
      return this.localPlanetsData.filter(planet => {
        return planet.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    galaxiesData() {
      return this.localGalaxiesData.filter(galaxy => {
        return galaxy.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
};
</script>


<style scoped>
.cards-area {
  background-color: rgb(25, 25, 25);
  color: white;
}

.cards-row {
  margin: 5px;
  padding: 5px;
}

h4 {
  margin-left: 15px;
}

.cards {
  display: flex;
}

.card-area {
  cursor: pointer;
}

.card-link {
  text-decoration: none;
  color: black;
  margin-left: 15px;
}

.search-wrapper {
  width: 100%;
  display: flex;
  justify-content: right;
  padding-right: 8px;
}

.videos-row {
  margin-left: 15px;
}

input {
  margin: 4px;
  width: 150px;
  outline: none;
  border-radius: 4px;
  background-color: rgb(25, 25, 25);
  color: white;
  border: 1px solid #ccc
}
</style>