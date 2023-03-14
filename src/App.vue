<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo />
    <Card imgSrc="1.jpg" summary="哈哈" />
    <br />
    <Card imgSrc="1.png" summary="ok">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">这里是slot</div>
          <div class="price">￥666.00</div>
        </div>
      </template>
    </Card>
    <br />
    <Card imgSrc="1.png" summary="666" :width="370" :imgHeight="90">
      Super Chat
      <template v-slot:footer>
        <div class="footer-chat">
          <div class="level">这里是slot</div>
          <div class="level">￥666.00</div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-chat {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
