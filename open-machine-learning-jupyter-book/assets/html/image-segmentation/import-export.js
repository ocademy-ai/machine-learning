// import-export.js


var export_kernel_dialog = $("#export-kernel-dialog")[0];
$("#export-kernel-button").click(() => {
      $("#export-kernel-field").val(JSON.stringify(kernels[filter]));
      $("#export-kernel-field-container").addClass("is-dirty");
      export_kernel_dialog.showModal();
});
$("#export-kernel-dialog .close").click(() => export_kernel_dialog.close());
$("#export-kernel-download-button").click(
      () => {
            download(
                  JSON.stringify(kernels[filter], null, "\t"),
                  (kernels[filter].name + " Kernel.json"),
                  "application/json"
            );
      }
);

var import_kernel_dialog = $("#import-kernel-dialog")[0];
$("#import-kernel-button").click(() => {
      $("#import-kernel-field").val("");
      import_kernel_dialog.showModal();
});
$("#import-kernel-dialog .confirm").click(
      () => {
            kernels.push(JSON.parse($("#import-kernel-field").val()));
            set_filter(kernels.length - 1);
            update_filters();
            display_snackbar("Filter kernel imported.", 5000);
      }
);
$("#import-kernel-dialog .close").click(() => import_kernel_dialog.close());

console.log("import-export.js loaded");