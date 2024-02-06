import React from 'react';
import './SP500.css';

import {
	StockChartComponent,
	CandleSeries,
	Inject,
	StockChartSeriesCollectionDirective,
	StockChartSeriesDirective,
	DateTime,
	LineSeries,
	EmaIndicator,
	RsiIndicator,
	BollingerBands,
	TmaIndicator,
} from '@syncfusion/ej2-react-charts';
import { chartData } from '../../asset/data/stock.tsx';

const SP500 = () => {
	return (
		<div className='SP500'>
			<div className='info'>
				<div className='sticker'>
					<h1>S&P500&#174;</h1>
					<div className='price'>
						<span className='current-price'>4,942.81 USD</span>
						<span className='divider'>|</span>
						<span className='percent'>-0.32%</span>
					</div>
				</div>
				<div className='nav-info'>
					<span>Overview</span>
					<span>Data</span>
					<span>Index-Linked Products</span>
					<span>New & Research</span>
				</div>
			</div>
			<StockChartComponent>
				<StockChartSeriesCollectionDirective>
					<StockChartSeriesDirective
						type='Candle'
						dataSource={chartData}
						xName='x'
					/>
				</StockChartSeriesCollectionDirective>
				<Inject
					services={[
						CandleSeries,
						DateTime,
						LineSeries,
						EmaIndicator,
						RsiIndicator,
						BollingerBands,
						TmaIndicator,
					]}
				/>
			</StockChartComponent>
		</div>
	);
};

export default SP500;
