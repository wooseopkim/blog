let
  nixpkgs = fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/00769b0532199db4e1bda59865f00f3a86232c75.tar.gz";
    sha256 = "1bs1mvzhba0rpm49zsn3rxikh0zgc7s2z7nbc4c7ldr0pxb6mxxq";
  };
in
{
  pkgs ? import nixpkgs { },
  ...
}:
with pkgs;
mkShellNoCC {
  packages = [
    bun
    nixfmt-rfc-style
    nixd
  ];

  LD_LIBRARY_PATH = "${stdenv.cc.cc.lib}/lib";
}
