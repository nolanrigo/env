with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "env";
  buildInputs = [
    nodejs-14_x
    gnumake
  ];
  shellHooks = ''
  '';
}
