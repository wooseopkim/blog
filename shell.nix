let
  pkgs = import <nixpkgs> { };
in
with pkgs;
mkShellNoCC {
  packages = [
    bun
    nixfmt-rfc-style
    nixd
    act
  ];

  LD_LIBRARY_PATH = "${stdenv.cc.cc.lib}/lib";
}
