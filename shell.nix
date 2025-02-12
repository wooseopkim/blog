let
  pkgs = import <nixpkgs> { };
in
with pkgs;
mkShellNoCC {
  packages = [
    bun
    nixfmt-rfc-style
    nixd
    yamlfmt
  ];

  LD_LIBRARY_PATH = "${stdenv.cc.cc.lib}/lib";
}
