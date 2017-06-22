
// Import style stuff from stone cutter
import { easings } from '../../lib/stonecutter/index';


export var stoneCutterGridProps = {
    responsive: true,
    layout: 'pinterest',
    enterExitStyle: 'simple',
    duration: 120,
    stiffness: 100,
    damping: 18,
    columns: 5,
    gutters: 0,
    columnWidth:260,
    easing: easings.cubicOut
};


export var CellContainer = {

    height: 300,
    width: 250,
    padding:5,
    border: '1px dashed silver'

}

export var CellBase = {

    height: 296,
    paddingLeft:5,
    paddingRight:5,
    fontWeight: 'bold',
    fontSize: '0.75em',
    textAlign: 'left',
    backgroundColor: '#B0E0f0',
    overflowX: 'hidden',
    borderRadius: '6px',
    border: '1px dashed silver'

}


export var CC1 = {

    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left'

}

export var CC2 = {

    fontSize: 10,
    fontWeight: 'bold',
    overflowY: 'scroll',
}

export var AdminCell = {

    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#c0a0a0'

}

