/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Layout, MXContentMain} from '../components'

import config from '../../config'



const TryNow = () => {
    return (<Layout hasNavPadding="true">
            <Helmet title={`Try Now | ${config.siteTitle}`} />
            <MXContentMain>
            <div class="mxblock mxblock--try">
                <h1 class="mxblock--try__hx">Try Now</h1>
                <p class="mxblock--try__p">The easiest way to try Matrix is to use the <a href="https://about.riot.im/" rel="noopener noreferrer" target="_blank">Riot Web</a> client in your browser, which is configured by default to connect to the matrix.org homeserver.</p>
                
                <img src="/images/riot-ensemble.png" width="1120" srcset="/images/riot-ensemble-p-500.png 500w, /images/riot-ensemble-p-800.png 800w, /images/riot-ensemble-p-1080.png 1080w, /images/riot-ensemble.png 1803w" sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 95vw, 800px" alt="" class="mxblock--try__img" />
                
                <a href="https://about.riot.im/" rel="noopener noreferrer" target="_blank" class="mxblock__btn mxblock--hero__btn mxblock--hero_btn--try w-button">Go to Riot.im</a>

                <p class="mxblock--try__p">Alternatively, you can find more clients and servers in <a href="/docs/projects/try-matrix-now">Discover</a>.</p>
            </div>
            </MXContentMain>
    </Layout>)
}

export default TryNow
