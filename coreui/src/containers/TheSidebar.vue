<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
     <img :src="'img/avatars/logo-'+commune.commune+'-full.png'" size="custom-size" 
        class="d-block" 
        :height="50" 
        :viewBox="`0 0 ${minimize ? 110 : 556} 134`"/>
    </CSidebarBrand>
    <CRenderFunction flat :content-to-render="nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheSidebar',
  data () {
    return {
      //minimize: false,
      nav: [],
      //show: true,
      buffor: [],
      commune: null,
    }
  },
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  },
  methods: {
    dropdown(data){
      let result = {
            _name: 'CSidebarNavDropdown',
            name: data['name'],
            route: data['href'],
            icon: data['icon'],
            _children: [],
      }
      for(let i=0; i<data['elements'].length; i++){
        if(data['elements'][i]['slug'] == 'dropdown'){
          result._children.push( this.dropdown(data['elements'][i]) );
        }else{
          result._children.push(
            {
                   _name:  'CSidebarNavItem',
                   name:   data['elements'][i]['name'],
                   to:     data['elements'][i]['href'],
                   icon:   data['elements'][i]['icon']
            } 
          );
        }
      }
      return result;
    },
    rebuildData(data){
      this.buffor = [{    
        _name: 'CSidebarNav',
        _children: []
      }];
      for(let k=0; k<data.length; k++){
        switch(data[k]['slug']){
          case 'link':
            if(data[k]['href'].indexOf('http') !== -1){
              this.buffor[0]._children.push(
                  {
                      _name: 'CSidebarNavItem',
                      name: data[k]['name'],
                      href: data[k]['href'],
                      icon: data[k]['icon'],
                      target: '_blank'
                  }
              );
            }else{
              this.buffor[0]._children.push(
                  {
                      _name: 'CSidebarNavItem',
                      name: data[k]['name'],
                      to:   data[k]['href'],
                      icon: data[k]['icon'],
                  }
              );
            }
          break;
          case 'title':
            this.buffor[0]._children.push(
              {
                _name: 'CSidebarNavTitle',
                _children: [data[k]['name']]
              }
            );
          break;
          case 'dropdown':
            this.buffor[0]._children.push( this.dropdown(data[k]) );
          break;
        }
      }
      return this.buffor;
    },
    getCommuneDefaut (){
      let self = this;
      this.refreshing = true;

      axios.get(  this.$apiAdress + '/api/indicateurs-old/getDefaultCommune')
      .then(function (response) {
        localStorage.setItem("communedefaut",JSON.stringify(response.data))
        self.commune = response.data;
        self.commune.commune = self.commune.commune.toLowerCase();
        self.commune_id = self.commune.id;
       
      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
        localStorage.removeItem("communedefaut")
        self.commune_id = 0;
        self.commune = 0;
      });
    }
  },
  mounted () {
    
    if(localStorage.getItem("communedefaut")){
        this.commune = JSON.parse(localStorage.getItem("communedefaut"));
        console.log(this.commune)
        // this.commune.commune = this.commune.commune.toLowerCase();
        this.commune_id = this.commune.id;
      }
      else {
        this.commune_id = null;
      }
     this.getCommuneDefaut();

    this.$root.$on('toggle-sidebar', () => {
      const sidebarOpened = this.show === true || this.show === 'responsive'
      this.show = sidebarOpened ? false : 'responsive'
    })
    this.$root.$on('toggle-sidebar-mobile', () => {
      const sidebarClosed = this.show === 'responsive' || this.show === false
      this.show = sidebarClosed ? true : 'responsive'
    })
    let self = this;

    // console.log(this.$apiAdress);

    axios.get( this.$apiAdress + '/api/menu?token=' + localStorage.getItem("api_token") )
    .then(function (response) {
      self.nav = self.rebuildData(response.data);
    }).catch(function (error) {
      console.log(error);
      self.$router.push({ path: '/login' });
    });
  }
}
</script>
