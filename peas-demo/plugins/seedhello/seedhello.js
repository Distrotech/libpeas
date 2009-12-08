var Gtk = imports.gi.Gtk;

var LABEL_STRING = "Seed Says Hello Too!";

print("LABEL_STRING=" +  LABEL_STRING);

plugin = {
  activate: function(win) {
    print("SeedHelloPlugin.activate");
    win._seedhello_label = new Gtk.Label({ label: LABEL_STRING });
    win._seedhello_label.show();
    win.get_child().pack_start(win._seedhello_label);
  },
  deactivate: function(win) {
    print("SeedHelloPlugin.deactivate");
    win.get_child().remove(win._seedhello_label);
    win._seedhello_label.destroy();
  },
};