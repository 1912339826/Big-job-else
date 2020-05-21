<template>
  <div id="a0p0p7">
    <!-- <Facilities /> -->
    <!-- <HomePage/> -->
    <RiskWarning/>
    <!-- <VehiclesInThe/> -->
    <!-- <Face /> -->
    <!-- <Shape/> -->
    <!-- <MotorcycleType/> -->
  </div>
</template>

<script>
import Facilities from "./pages/Facilities/index";
import HomePage from "./pages/HomePage/index";
import RiskWarning from "./pages/RiskWarning/index";
import VehiclesInThe from "./pages/VehiclesInThe/index";
import Face from "./pages/Face/index";
import Shape from "./pages/Shape/index";
import MotorcycleType from './pages/MotorcycleType/index'
export default {
  name: "App",
  components: {
    Facilities,
    HomePage,
    RiskWarning,
    VehiclesInThe,
    Face,
    Shape,
    MotorcycleType
  },
  mounted() {}
};
</script>

<style lang="less">
@import url("./assets/less/all.less");
#a0p0p7 {
}
</style>
