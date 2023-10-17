/* operation logs or oplogs of the primary node will be used by secondary nodes to get their own datasets or recors ops */

// mongo sharding on collections
// cmd

/* db2.movies.getShardDistribution() */ //to check whether collection was sharded or not
/* sh.enableSharding("dbname") */ //enable the sharding on database first
/* sh.shardCollection("sharedemo.movies2", {"title":"hashed"}); */ // enable the shard on the collection
