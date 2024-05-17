<template>
	<view class="home-container">
		<!-- 背景 -->
		<view class="backhome"></view>
		<view class="container" style="margin-top: 0rpx; display: flex; flex-direction: column; justify-content: center; align-items: center">
			<!-- 顶部 -->
			<view class="test1" style="margin-top:150rpx;display: flex; flex-direction: column; justify-content: center; align-items: center">
				<up-row justify="space-between" gutter="10">
					<up-col span="3" v-for="(item, index) in image_list.slice(0, 3)">
						<view class="block_content">
							<up-image :show-loading="true" :src="item.url" :mode="item.mode" width="210rpx" height="80rpx" @click="handleImageClick(index)"></up-image>
						</view>
					</up-col>
				</up-row>
			</view>
			<!-- 模块 -->
			<view class="test2" style="display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative">
				<up-row justify="space-between" gutter="10" v-for="(item, index) in image_list.slice(4, 7)" style="display: flex">
					<up-col span="3">
						<view class="block_content">
							<up-image :show-loading="true" :src="item.url" :mode="item.mode" @click="handleImageClick(index)" style="max-width: 100%; max-height: 100%"></up-image>
						</view>
					</up-col>
				</up-row>
			</view>
		</view>
	</view>
</template>
<script setup>
import { reactive, computed, onBeforeMount } from 'vue';
const image_list = [
	{
		url: 'https://p.sda1.dev/17/402db6b8b5e62c86e39b1655a42933e7/setting1.png',
		title: 'setting',
		mode: 'aspectFit'
	},
	{
		url: 'https://p.sda1.dev/17/51d387dfd8890a388c22017f6c8f7414/score1.png',
		title: 'score',
		mode: 'aspectFit'
	},
	{
		url: 'https://p.sda1.dev/17/b672c1f510c6e4d868d50deeb3f8b05b/card1.png',
		title: 'card',
		mode: 'aspectFit'
	},
	{
		url: '/static/images/home/homeback.jpg',
		title: 'homeback',
		mode: 'scaleToFill'
	},
	{
		url: 'https://p.sda1.dev/17/6c811101abc4f6134dffe0941bf7e2f6/gu1.png',
		title: 'gu',
		mode: 'aspectFit'
	},
	{
		url: 'https://p.sda1.dev/17/af28ba843f5a9395420798aafb7098f4/shi1.png',
		title: 'shi',
		mode: 'aspectFit'
	},
	{
		url: 'https://p.sda1.dev/17/20613b2cae0b3ddb93f99c5f2a105c9c/red1.png',
		title: 'red',
		mode: 'aspectFit'
	},
	{
		url: 'https://p.sda1.dev/17/88d39f20e02d3004daec305bd4b81f58/ip.png',
		title: 'ip',
		mode: 'aspectFit'
	}
];

function handleImageClick(index) {
	// 处理点击事件的逻辑
	console.log('Image clicked at index:', index);
	switch (index) {
		case 0:
			console.log('setting', index);
			break;
		case 1:
			console.log('score', index);
			break;
		default:
			console.log('card', index);
	}
}
</script>

<style lang="scss" scoped>
.backhome {
	background: $base64-homeback-code; //base64图片
	background-repeat: no-repeat; /* 不重复 */
	background-size: cover; /* 拉伸铺满屏幕 */
	backgruond-size: 100% 100%;
	z-index: -1;
	width: 100%;
	height: 100%;
	position: fixed;
}
</style>
