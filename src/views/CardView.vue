<template>
  <div class="cards-area">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="pesquisar..." />
    </div>

    <div class="planets-area">
      <h4>Sistema Solar</h4>
      <div class="planets">
        <RouterLink class="planet-link" v-for="planet in planetsData" :key="planet.englishName" :to="planet.englishName">
          <div class="planet">
            <PlanetCard :name="planet.name" :englishName="planet.englishName" :pathBaseColor="planet.pathBaseColor"
              :pathDisplacement="planet.pathDisplacement" :pathRoughness="planet.pathRoughness"
              :pathNormal="planet.pathNormal" />
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="planets-area">
      <h4>Galáxias</h4>
      <div class="planets">
        <RouterLink class="planet-link" v-for="galaxy in galaxiesData" :key="galaxy.englishName"
          :to="galaxy.englishName">
          <div class="planet">
            <GalaxyCard :imagePath="galaxy.imagePath" :name="galaxy.name" />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import PlanetCard from '../components/PlanetCard.vue'
import GalaxyCard from '../components/GalaxyCard.vue'
import planetsData from '../assets/planetsData'
import galaxiesData from '../assets/galaxiesData'

export default {
  components: { PlanetCard, GalaxyCard },

  data() {
    return {
      localPlanetsData: planetsData,
      localGalaxiesData: galaxiesData,
      search: ""
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

.planets-area {
  margin: 5px;
  padding: 5px;
}

h4 {
  margin-left: 15px;
}

.planets {
  display: flex;
}

.planet {
  margin-left: 15px;
  cursor: pointer;
}

.planet-link {
  text-decoration: none;
  color: black
}

.search-wrapper{
  width: 100%;
  display: flex;
  justify-content: right;
  padding-right: 8px;
}

input{
  margin: 4px;
  width: 150px;
  outline: none;
  border-radius: 4px;
  background-color: rgb(25, 25, 25);
  color: white;
  border: 1px solid #ccc
}
</style>