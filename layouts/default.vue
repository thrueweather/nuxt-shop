<template>
  <div>
  	<NavBar/>
    <Navigation/>
    <transition name="animaterouter">
    	<nuxt/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import { ChevronRightIcon, ShoppingCartIcon, MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  components: {
    NavBar,
    Navigation,
    ChevronRightIcon,
    Footer
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700')
$default-color: #eee
body
  font-family: 'Lato', sans-serif
  margin: 0
  padding: 0
.animaterouter-enter-active, .animaterouter-leave-active
  transition: opacity .3s
.animaterouter-enter, .animaterouter-leave-to
  opacity: 0
.border
  position: sticky
  top: 0
  width: 100%
  border-bottom: 1px solid $default-color
  z-index: 30
.header
    background-color: white
    padding: 15px 0
    .header_wrapp
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      .header_wrapp-item
        position: relative
        .logo
          color: gray
          text-transform: uppercase
          font-size: 20px
          font-weight: 500
          float: left
          border-right: 1px solid $default-color
          padding-right: 20px
          transition: .4s
          &:hover
            color: black
        .navigation
          float: left
          nav
            ul
              margin: 0
            li
              list-style: none
              display: inline
              padding-left: 15px
            a
              color: gray
              text-decoration: none
              font-size: 16px
              transition: .4s
              outline: none
              &:hover
                color: black
        .cart
          color: #656363
          .cart_icon
            border: 2px solid #656363
            border-radius: 20px
            padding: 8px 10px
        .modal-cart
          background: rgba(0, 0, 0, 0.5)
          position: fixed
          top: 0
          left: 0
          overflow: hidden
          margin: auto
          width: 100%
          height: 100%
          display: flex
          justify-content: center
          align-items: center
          overflow: auto
          .modal-cart-container
            background-color: white
            width: 80%
            padding: 20px
            .title
              border-bottom: 1px solid $default-color
              display: flex
              flex-direction: row
              justify-content: space-between
              padding: 10px 0
              h2
                margin: 0
              p
                margin: 0
              span
                cursor: pointer
            .cart_wrapp-item
              display: flex
              flex-direction: row
              justify-content: space-between
              align-items: center
              border-bottom: 1px solid $default-color
              padding: 10px 0
      .mob-icon
        display: none
    .header_mobile_wrapp
      display: flex
      justify-content: center
      align-items: center
      text-align: center
      border-left: 1px solid $default-color
      border-right: 1px solid $default-color
      .header_mobile_wrapp-item
        padding: 10px 0
        nav
          ul
            margin: 0
            padding: 0
            li
              list-style: none
              padding: 5px 0
              a
                color: gray
                text-decoration: none
                transition: .4s
                outline: none
                &:hover
                  color: black
.container
  margin-right: auto
  margin-left: auto
  padding-right: 15px
  padding-left: 15px
@media (min-width: 576px)
  .container
    max-width: 540px
@media (min-width: 768px)
  .container
    max-width: 720px
@media (min-width: 992px)
  .container
    max-width: 960px
@media (min-width: 1200px)
  .container
    max-width: 1070px
@media (max-width: 1200px)
   #app._fixed
    background-color: white
    position: fixed
    top: 0
    left: 0
    width: 100%
@media only screen and (max-width: 767px)
  .header .header_wrapp
    padding: 10px 0
  .header .header_wrapp .header_wrapp-item .navigation
    display: none
  .header .header_wrapp .mob-icon
    display: block
  .header .header_wrapp .header_wrapp-item .logo
    font-size: 16px
    border-right: none
    padding-right: 0
</style>
