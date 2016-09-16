using Murmur;
using System;
using System.Security.Cryptography;


public static class x {
  public static void y() {
    byte[] data = Guid.NewGuid().ToByteArray();
    HashAlgorithm murmur128 = MurmurHash.Create128();
    byte[] hash128 = murmur128.ComputeHash(data);
    HashAlgorithm murmur32 = MurmurHash.Create32();
    byte[] hash32 = murmur32.ComputeHash(data);
  }
}
