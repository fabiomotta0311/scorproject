Data sctructure

kpidb
	userlist
		_id
		code
		name
		description
		email
		password
		
		log_user { date; user; text }

	actionlist
		_id
		code
		name
		description
		related_kpi
		
		duedate { duedate; updby; upddate }
		log_action { date; user; text }

	kpilist
		_id
		code
		name
		description
		
		// CHART_BYDAY 
		g1_titulo
		g1_subtitulo
		g1_rotulo_x 
		g1_rotulo_y 
		
		g1_dados {
			g1_categorias
			g1_series
		}

		// CHART_MONTH
		g2_titulo
		g2_subtitulo
		g2_rotulo_x 
		g2_rotulo_y 
		
		g2_dados {
			g2_categorias
			g2_series
		}

		// CHART_PARET
		g3_titulo
		g3_subtitulo
		g3_rotulo_x 
		g3_rotulo_y 
		
		g3_dados {
			g3_periodo
			g3_categorias
			g3_series
		}

		log_kpi { date; user; text }

