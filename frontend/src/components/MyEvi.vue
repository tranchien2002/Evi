<template>
  <div :class="classType">
    <div class="et_pb_pricing_heading">
      <h2 class="et_pb_pricing_title">Signed</h2>
    </div>
    <span class="et_pb_image_wrap">
      <img
        data-cfsrc="@/assets/images/cheque.png"
        sizes="(max-width: 64px) 100vw, 64px"
        class="et-waypoint et_pb_animation_off"
        src="@/assets/images/cheque.png"
      />
    </span>
    <div class="et_pb_pricing_content">
      <ul class="et_pb_pricing">
        <li>
          <span>Location: {{evi.location}}</span>
        </li>
        <li>
          <span>Date: {{evi.date}}</span>
        </li>
        <li>
          <span>Type: {{evi.type}}</span>
        </li>
      </ul>
    </div>
    <div class="et_pb_button_wrapper">
      <a
        class="et_pb_button et_pb_pricing_table_button"
        href="javascript:void(0)"
        @click="clicked"
      >Detail</a>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import PackList from "@/constants/InsurancePacks";
export default {
  name: "myEvi",
  props: { index: Number, onClick: Function, instance: Object },
  data() {
    return {
      evi: {}
    };
  },
  computed: {
    classType: function() {
      return (
        "et_pb_pricing_table et_pb_pricing_table_" +
        (this.index % 2 == 0 ? 2 : 1).toString() +
        " insurance-package"
      );
    }
  },
  methods: {
    async clicked() {
      this.onClick({
        evi: this.evi
      });
    }
  },
  async created() {
    let evi = {};
    evi.location = await this.instance.methods.location().call();
    console.log(evi.location);
    evi.price = await this.instance.methods.price().call();
    evi.date = await this.instance.methods.date().call();
    let timeString = await this.instance.methods.timeString().call();
    evi.timeStart = timeString.indexOf("1");
    evi.timeEnd = timeString.lastIndexOf("1");
    let rate = await this.instance.methods.rate().call();
    PackList.forEach(e => {
      if (e.rate == rate) {
        evi.type = e.type;
      }
    });
    this.evi = evi;
  }
};
</script>
