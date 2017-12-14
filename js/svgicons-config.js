var svgIconConfig = {

	hamburgerCross : {
		url : '../img/svg/hamburger.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"path" : "M48,24H16v-4h32V24z"}' }, 
					to : { val : '{"path" : "M41.9,44.7L19.3,22.1l2.8-2.8l22.6,22.6L41.9,44.7z"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' }, 
					to : { val : '{"opacity" : 0}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "M48,44H16v-4h32V44z"}' }, 
					to : { val : '{"path" : "M19.3,41.9l22.6-22.6l2.8,2.8L22.1,44.7L19.3,41.9z"}' }
				} 
			}
		]
	}
	
};