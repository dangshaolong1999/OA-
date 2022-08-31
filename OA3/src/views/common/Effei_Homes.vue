<template>
	<div class="homes-wrapper">
		<div class="top-box">
			<div class="left-box">
				<div class="header-box">
					<span>待办事项</span>
					<a href="javascript:;">查看更多</a>
				</div>
				<el-table border style="width: 100%" :show-header="false">
					<el-table-column label="待办事项"></el-table-column>
				</el-table>
			</div>
			<div class="right-box">
				<el-calendar v-model="value"> </el-calendar>
			</div>
		</div>
		<div class="middle-box">
			<div class="left-box">
				<div class="header-box">
					<span>员工数据</span>
				</div>
				<ul>
					<li>
						<p>员工数据</p>
						<p>2000人</p>
					</li>
					<li>
						<p>正式员工</p>
						<p>1000人</p>
					</li>
					<li class="three">
						<p>实习生</p>
						<p>15人</p>
					</li>
					<li>
						<p>本月待入职</p>
						<p>15人</p>
					</li>
					<li>
						<p>本月待离职</p>
						<p>13人</p>
					</li>
					<li class="three">
						<p>本月待转正</p>
						<p>3人</p>
					</li>
				</ul>
			</div>
			<div class="right-box">
				<div class="header-box">
					<p>员工地区分布</p>
				</div>
				<div class="list-box" id="myChart"></div>
			</div>
		</div>
		<div class="bottom-box" id="myCharts"></div>
	</div>
</template>

<script>
import * as echarts from 'echarts'
export default {
	data() {
		return {
			option: {
				tooltip: {
					trigger: 'item'
				},
				legend: {
					orient: 'vertical',
					left: 'right'
				},
				series: [
					{
						name: 'Access From',
						type: 'pie',
						radius: '50%',
						data: [
							{ value: 1048, name: '东北' },
							{ value: 735, name: '内蒙' },
							{ value: 580, name: '河北' },
							{ value: 484, name: '山西' },
							{ value: 300, name: '河南' }
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			},
			options: {
				xAxis: {
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				},
				yAxis: {},
				series: [
					{
						type: 'bar',
						data: [100, 140, 230, 100, 130, 224, 151, 164, 196, 217, 219, 132],
						itemStyle: {
							color: '#b886f8'
						}
					}
				]
			},
			value: new Date()
		}
	},
	mounted() {
		this.rawLine(), this.rawLines()
	},
	methods: {
		rawLine() {
			let myChart = echarts.init(document.getElementById('myChart'))
			myChart.setOption(this.option)
		},
		rawLines() {
			let myCharts = echarts.init(document.getElementById('myCharts'))
			myCharts.setOption(this.options)
		}
	}
}
</script>

<style lang="scss" scoped>
.homes-wrapper {
	.top-box {
		display: flex;
		height: 300px;
		justify-content: space-between;
		.left-box {
			width: 68%;
			.header-box {
				width: 100%;
				height: 60px;
				line-height: 60px;
				padding: 0 20px;
				font-size: 20px;
				border: 1px solid #cccccc;
				a {
					font-size: 18px;
					margin-left: 530px;
				}
			}
		}
		.right-box {
			// width: 50%;
			width: 30%;
			// height: 200px;
		}
	}
	.middle-box {
		display: flex;
		height: 300px;
		justify-content: space-between;
		.left-box {
			width: 48%;
			.header-box {
				width: 100%;
				height: 60px;
				line-height: 60px;
				padding: 0 20px;
				font-size: 20px;
				border: 1px solid #cccccc;
				a {
					font-size: 18px;
					margin-left: 410px;
				}
			}
			ul {
				width: 100%;
				height: 240px;
				display: flex;
				flex-wrap: wrap;
				border: 1px solid #cccccc;
				li {
					margin-top: 10px;
					width: 33.33%;
					height: 60px;
					text-align: center;
					padding-top: 20px;
					border-right: 1px solid #cccccc;
				}
				.three {
					border: none;
				}
			}
		}
		.right-box {
			width: 48%;
			.header-box {
				width: 100%;
				height: 60px;
				line-height: 60px;
				padding: 0 20px;
				font-size: 20px;
				border: 1px solid #cccccc;
			}
			.list-box {
				width: 100%;
				height: 240px;
				border: 1px solid #cccccc;
			}
		}
	}
	.bottom-box {
		width: 100%;
		height: 300px;
		margin-top: 10px;
		border: 1px solid #cccccc;
		padding: 50px;
	}
	::v-deep .el-calendar-table .el-calendar-day {
		width: 30px;
		height: 30px;
	}
}
</style>
