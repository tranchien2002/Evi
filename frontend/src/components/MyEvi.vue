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
      >
    </span>
    <div class="et_pb_pricing_content">
      <ul class="et_pb_pricing">
        <li>
          <span>Nguyen Van A</span>
        </li>
        <li>
          <span>01/01/2019 - 01/10/2020</span>
        </li>
        <li>
          <span>Basic</span>
        </li>
      </ul>
    </div>
    <div class="et_pb_button_wrapper">
      <a
        class="et_pb_button et_pb_pricing_table_button"
        href="javascript:void(0)"
        @click="onClick"
      >Detail</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "myEvi",
  props: { index: Number, onClick: Function },
  computed: {
    classType: function() {
      return (
        "et_pb_pricing_table et_pb_pricing_table_" +
        (this.index % 2 == 0 ? 2 : 1).toString() +
        " insurance-package"
      );
    }
  }
};
</script>
