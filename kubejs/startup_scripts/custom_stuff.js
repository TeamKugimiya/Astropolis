/// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// New Items

StartupEvents.registry('item', event => {
  event.create('astropolis:machinist_research_pack').displayName('機械師研究包').texture('astropolis:item/machinist_research_pack')
  event.create('astropolis:foodies_research_pack').displayName('美食家研究包').texture('astropolis:item/foodies_research_pack')
  event.create('astropolis:miners_research_pack').displayName('礦工研究包').texture('astropolis:item/miners_research_pack')
  event.create('astropolis:water_core').displayName('水核心').texture('astropolis:item/water_core')
  event.create('astropolis:ingot_of_ingots').displayName('命中註錠').glow(true).texture('astropolis:item/ingot_of_ingots')
  event.create('astropolis:gem_of_gems').displayName('至臻寶石').glow(true).texture('astropolis:item/gem_of_gems')
  event.create('astropolis:ruby').displayName('紅寶石').texture('astropolis:item/ruby')
  event.create('astropolis:sapphire').displayName('藍寶石').texture('astropolis:item/sapphire')
  event.create('astropolis:overworld_core').displayName('主世界核心').texture('astropolis:item/overworld_core')
  event.create('astropolis:shard_of_shards').displayName('萬象碎片').texture('astropolis:item/shard_of_shards')
  
//  event.create('astropolis:ancient_seeds').displayName('Ancient Seeds').texture('astropolis:item/ancient_seeds')
})

BlockEvents.modification(event => {
  event.modify('cosmopolis:asteroid_block', block => {
	  block.destroySpeed = 0.5
	  block.requiresTool = false
	})
})

	


// New Blocks


StartupEvents.registry('block', event => {
  event.create('astropolis:never_ender_ore_base')

})






//Disable Nether Portals

/*

onForgeEvent('net.minecraftforge.event.world.BlockEvent$PortalSpawnEvent', event => {
  event.setCanceled(true)
})
*/


