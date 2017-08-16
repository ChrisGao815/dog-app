<template>
<div>
	<table border="1" cellpadding="1" cellspacing="0">
		<caption>个人信息</caption>
		<thead>
			<tr>
				<th>名字</th>
				<th>年龄</th>
				<th>日期</th>
				<th>城市</th>
				<th>email</th>
				<th>ID</th>
				<th>图片</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(msg,index) in oo">
				<td>{{msg.name}}</td>
				<td>{{msg.age}}</td>
				<td>{{msg.birthday}}</td>
				<td>{{msg.city}}</td>
				<td>{{msg.email}}</td>
				<td>{{msg.id}}</td>
				<td><img :src=msg.image></td>
			</tr>
		</tbody>
	</table>
</div>
</template>

<script>

export default { 
	props:{
		oo:{
			type:Array
		}
	}
}
</script>

<style lang="css" scoped>
td{
	padding: 0 10px;
}
</style>