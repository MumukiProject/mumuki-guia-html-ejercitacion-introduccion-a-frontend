it("Se introdujeron cinco etiquetas p", () => {
  _originalDocument_.getElementsByTagName("p").length.should.eql(5);
  document.getElementsByTagName("p").length.should.eql(5);
})


