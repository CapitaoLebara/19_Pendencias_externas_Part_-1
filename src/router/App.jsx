import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Login } from "../pages/Login"
import { P404 } from "../pages/P404"
import  Private  from "./Private"

//PAGES FROM WATER
import { Agua } from "../pages/Agua"
import { AllPedidos } from "../components/pages_route/AllPedidos/AllPedidos"
import { Clear } from "../components/pages_route/Concluidos/Clear"
import { Andamento } from "../components/pages_route/Em_andamento/Andamento"
import { Nao_concluido } from "../components/pages_route/Não_Concluido/Nao_concluido"

//PAGES FROM CLEAN
import { Limpeza } from "../pages/Limpeza"
import {AllPedidosLimpeza} from '../components/pages_route-Limpeza/AllPedidosLimpeza/AllPedidosLimpeza'
import { ClearLimpeza } from "../components/pages_route-Limpeza/ConcluidosLimpeza/ClearLimpeza"
import { AndamentoLimpeza } from "../components/pages_route-Limpeza/Em_andamentoLimpeza/AndamentoLimpeza"
import { Nao_concluidoLimpeza } from "../components/pages_route-Limpeza/Não_ConcluidoLimpeza/Nao_concluidoLimpeza"


//PAGES FROM ENERGIA
import { Energia } from "../pages/Energia"
import { AllPedidosEnergia } from "../components/pages_route_Energia/AllPedidosEnergia/AllPedidosEnergia"
import { ClearEnergia } from "../components/pages_route_Energia/ConcluidosEnergia/ClearEnergia"
import { AndamentoEnergia } from "../components/pages_route_Energia/Em_andamentoEnergia/AndamentoEnergia"
import { Nao_concluidoEnergia } from "../components/pages_route_Energia/Não_ConcluidoEnergia/Nao_concluidoEnergia"


const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/Home',
    element:<Private><Home/></Private>
  },

  //ROUTES FROM WATER
  {
    path:'/Agua',
    element:<Private><Agua/></Private>
  },
  {
    path:'/Agua/emandamento',
    element:<Private> <Andamento/> </Private>
  },
  ,
  {
    path:'/Agua/Todos-os-pedidos',
    element:<Private><AllPedidos/></Private>
  },
  {
    path:'/Agua/pedidos-concluido',
    element:<Private><Clear/></Private>
  },
  {
    path:'/Agua/NaoConcluidos',
    element:<Private><Nao_concluido/></Private>
  },

  //ROUTES FROM LIGHT
  {
    path:'/Energia',
    element:<Private><Energia/></Private>
  },
  {
    path:'/Energia/emandamento',
    element:<Private> <AndamentoEnergia/> </Private>
  },
  ,
  {
    path:'/Energia/Todos-os-pedidos',
    element:<Private><AllPedidosEnergia/></Private>
  },
  {
    path:'/Energia/pedidos-concluido',
    element:<Private><ClearEnergia/></Private>
  },
  {
    path:'/Energia/NaoConcluidos',
    element:<Private><Nao_concluidoEnergia/></Private>
  },

  //ROUTES FROM CLEAN
  {
    path:'/Limpeza',
    element:<Private><Limpeza/></Private>
  },
  {
    path:'/Limpeza/emandamento',
    element:<Private> <AndamentoLimpeza/> </Private>
  },
  ,
  {
    path:'/Limpeza/Todos-os-pedidos',
    element:<Private><AllPedidosLimpeza/></Private>
  },
  {
    path:'/Limpeza/pedidos-concluido',
    element:<Private><ClearLimpeza/></Private>
  },
  {
    path:'/Limpeza/NaoConcluidos',
    element:<Private><Nao_concluidoLimpeza/></Private>
  },


  
  {
    path:'*',
    element:<P404/>
  },
])

export {router}
