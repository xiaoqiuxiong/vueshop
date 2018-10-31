<template>
	<div>
		<search
		@result-click="resultClick"
		@on-change="getResult"
		:results="results"
		placeholder="输入关键字进行搜索"
		v-model="value"
		position="absolute"
		auto-scroll-to-top
		top="0"
		@on-focus="onFocus"
		@on-cancel="onCancel"
		@on-submit="onSubmit"
		ref="search"></search>
		<swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
		<divider></divider>
	</div>
</template>
<script>
	const baseList = [{
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
		title: '送你一朵fua'
	}, {
		url: 'javascript:',
		img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
		title: '送你一辆车'
	}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/5.jpg',
		title: '送你一次旅行',
		fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
	}]
	const urlList = baseList.map((item, index) => ({
		url: 'http://m.baidu.com',
		img: item.img,
		fallbackImg: item.fallbackImg,
		title: `(可点击)${item.title}`
	}))
	export default {
		name: 'Index',

		data() {
			return {
			}
		},
		methods: {
			demo06_onIndexChange (index) {
				this.demo06_index = index
			},
			setFocus () {
				this.$refs.search.setFocus()
			},
			resultClick (item) {
				window.alert('you click the result item: ' + JSON.stringify(item))
			},
			getResult (val) {
				console.log('on-change', val)
				this.results = val ? getResult(this.value) : []
			},
			onSubmit () {
				this.$refs.search.setBlur()
				this.$vux.toast.show({
					type: 'text',
					position: 'top',
					text: 'on submit'
				})
			},
			onFocus () {
				console.log('on focus')
			},
			onCancel () {
				console.log('on cancel')
			}
		},
		data () {
			return {
				results: [],
				value: '',
				demo06_list: urlList,
				demo06_index: 0,
			}
		}
	}
</script>
<style scoped lang="less">
</style>