<template>
  <div class="cards-area">
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="Search title.." />
      <label>Search title:</label>
    </div>

    <div class="planets-area">
      <h4>Sistema Solar</h4>
      <div class="planets">
        <RouterLink class="planet-link" v-for="planet in planetsData" :key="planet.planetNameEnglish"
          :to="planet.planetNameEnglish">
          <div class="planet">
            <PlanetCard :planetName="planet.planetName" :planetNameEnglish="planet.planetNameEnglish"
              :planetPathBaseColor="planet.planetPathBaseColor" :planetPathDisplacement="planet.planetPathDisplacement"
              :planetPathRoughness="planet.planetPathRoughness" :planetPathNormal="planet.planetPathNormal" />
          </div>
        </RouterLink>
      </div>
    </div>

    <!--   <div class="galaxies-area">
    <h4>Galáxias</h4>
    <div class="galaxies">
      <RouterLink class="galaxy-link" v-for="galaxy in galaxiesData" :key="galaxy.planetNameEnglish"
        :to="galaxy.planetNameEnglish">
        <div class="galaxy">
          <PlanetCard :galaxy-name="galaxy.planetName" :galaxy-name-english="galaxy.planetNameEnglish"
            :galaxy-path-base-color="galaxy.planetPathBaseColor"
            :galaxy-path-displacement="galaxy.planetPathDisplacement" />
        </div>
      </RouterLink>
    </div>
  </div> -->
  </div>
</template>

<script>
import PlanetCard from '../components/PlanetCard.vue'
import planetsData from '../assets/planetsData'
import galaxiesData from '../assets/galaxiesData'

export default {
  components: { PlanetCard },

  data() {
    return {
      localPlanetsData: planetsData,
      localGalaxiesData: galaxiesData,
      search: ""
    }
  },
  computed: {
    planetsData() {
      return this.localPlanetsData.filter(p => {
        return p.planetName.toLowerCase().includes(this.search.toLowerCase())
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
</style>