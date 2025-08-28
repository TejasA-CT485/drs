import * as FI from "fractional-indexing"
import "react-data-grid/lib/styles.css"
import { createRoot } from "react-dom/client"
import { App } from "./app.tsx"

// @ts-ignore
window.FI = FI

import "./index.css"

createRoot( document.getElementById( "root" )! ).render( <App /> )
