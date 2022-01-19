class PROTECClava
{
	constructor()
    {
        this.mod = "protecclava";
        Logger.info(`Loading: ${this.mod}`);
        ModLoader.onLoad[this.mod] = this.load.bind(this);
    }

	load()
	{
		//set paths
		const database = DatabaseServer.tables;
        const items = database.templates.items;
        const handbook = database.templates.handbook.Items;
        const global = database.locales.global;
        const traders = database.traders;

		//start item 1 details
		var itemId = "P_Balaclava";
		var itemClone = "5fd8d28367cb5e077335170f";
		var itemCategory = "5b47574386f77428ca22b32f";
        var itemFleaPrice = 69420;
		var itemPrefabPath = "assets/content/items/equipment/facecover_smoke/item_equipment_head_smoke.bundle";
        var itemLongName = "Protective Balaclava";
        var itemShortName = "PROTECC";
        var itemDescription = "A cool looking balaclava, but somehow... different. When worn gives you the feeling as if something or someone is watching over you.";
        var itemTrader = "5ac3b934156ae10c4430e83c"; //Ragman
        var itemTraderPrice = 69420;
        var itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        var itemTraderLV = 1;
		
		//calling item 1 add functions
		this.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice, handbook);
        this.createItem(itemId, itemClone, itemPrefabPath, itemLongName, itemShortName, itemDescription, items, global);
        this.createItemOffer(itemId, itemTrader, itemTraderPrice, itemTraderCurrency, itemTraderLV, traders);
		
		//change item 1 properties
		items[itemId]._props.RepairCost = 69;
        items[itemId]._props.Durability = 69;
        items[itemId]._props.MaxDurability = 69;
        items[itemId]._props.armorClass = 5;
        items[itemId]._props.armorZone = ["Head", "LeftArm", "RightArm", "Chest", "Stomach", "LeftLeg", "RightLeg"];
		items[itemId]._props.BluntThroughput = 0.07;
		items[itemId]._props.ArmorMaterial = "UHMWPE";
		
		//start item 2 details
		itemId = "I_Balaclava";
		itemClone = "5fd8d28367cb5e077335170f";
		itemCategory = "5b47574386f77428ca22b32f";
		itemFleaPrice = 77777;
        itemLongName = "Invincible Balaclava";
        itemShortName = "5HEAD";
        itemDescription = "Magical Balaclava makes you feel stronk.";
        itemTrader = "5ac3b934156ae10c4430e83c"; //Ragman
        itemTraderPrice = 77777;
        itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        itemTraderLV = 1;
		
		//calling item 2 add functions
		this.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice, handbook);
        this.createItem(itemId, itemClone, itemPrefabPath, itemLongName, itemShortName, itemDescription, items, global);
        this.createItemOffer(itemId, itemTrader, itemTraderPrice, itemTraderCurrency, itemTraderLV, traders);
		
		//change item 2 properties
		items[itemId]._props.RepairCost = 77;
        items[itemId]._props.Durability = 77777;
        items[itemId]._props.MaxDurability = 77777;
        items[itemId]._props.armorClass = 10;
        items[itemId]._props.armorZone = ["Head", "LeftArm", "RightArm", "Chest", "Stomach", "LeftLeg", "RightLeg"];
		items[itemId]._props.BluntThroughput = 0;
		items[itemId]._props.ArmorMaterial = "UHMWPE";
		
		//start item 3 details
		var itemId = "P_Glasses";
		var itemClone = "603409c80ca681766b6a0fb2";
		var itemCategory = "5b47574386f77428ca22b331";
        var itemFleaPrice = 6969;
		var itemPrefabPath = "assets/content/items/equipment/glasses_npp/item_equipment_glasses_npp.bundle";
        var itemLongName = "Tac-Kek Protective Glasses";
        var itemShortName = "PROKEK";
        var itemDescription = "Cool looking glasses, but somehow... different. When worn gives you the feeling you are capable of surviving anything.";
        var itemTrader = "5ac3b934156ae10c4430e83c"; //Ragman
        var itemTraderPrice = 6969;
        var itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        var itemTraderLV = 1;
		
		//calling item 3 add functions
		this.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice, handbook);
        this.createItem(itemId, itemClone, itemPrefabPath, itemLongName, itemShortName, itemDescription, items, global);
        this.createItemOffer(itemId, itemTrader, itemTraderPrice, itemTraderCurrency, itemTraderLV, traders);
		
		//change item 3 properties
		items[itemId]._props.RepairCost = 50;
        items[itemId]._props.Durability = 150;
        items[itemId]._props.MaxDurability = 150;
        items[itemId]._props.armorClass = 5;
        items[itemId]._props.armorZone = ["Head", "LeftArm", "RightArm", "Chest", "Stomach", "LeftLeg", "RightLeg"];
		items[itemId]._props.MaterialType = "BodyArmor";
		items[itemId]._props.BluntThroughput = 0.07;
		items[itemId]._props.ArmorMaterial = "UHMWPE";
		
		//start item 4 details
		var itemId = "I_Glasses";
		var itemClone = "603409c80ca681766b6a0fb2";
		var itemCategory = "5b47574386f77428ca22b331";
        var itemFleaPrice = 69420;
		var itemPrefabPath = "assets/content/items/equipment/glasses_npp/item_equipment_glasses_npp.bundle";
        var itemLongName = "Tac-Kek Invincible Glasses";
        var itemShortName = "PROKEK";
        var itemDescription = "Cool looking glasses, but somehow... different. When worn gives you the feeling you are untouchable.";
        var itemTrader = "5ac3b934156ae10c4430e83c"; //Ragman
        var itemTraderPrice = 69420;
        var itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Roubles
        var itemTraderLV = 1;
		
		//calling item 4 add functions
		this.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice, handbook);
        this.createItem(itemId, itemClone, itemPrefabPath, itemLongName, itemShortName, itemDescription, items, global);
        this.createItemOffer(itemId, itemTrader, itemTraderPrice, itemTraderCurrency, itemTraderLV, traders);
		
		//change item 4 properties
		items[itemId]._props.RepairCost = 50;
        items[itemId]._props.Durability = 6666;
        items[itemId]._props.MaxDurability = 6666;
        items[itemId]._props.armorClass = 10;
        items[itemId]._props.armorZone = ["Head", "LeftArm", "RightArm", "Chest", "Stomach", "LeftLeg", "RightLeg"];
		items[itemId]._props.headSegments = [];
		items[itemId]._props.MaterialType = "BodyArmor";
		items[itemId]._props.BluntThroughput = 0.07;
		items[itemId]._props.ArmorMaterial = "UHMWPE";
	}
	
	createItemHandbookEntry(i_id, i_category, i_fprice, i_handbook)
    {
        //add item to handbook
        i_handbook.push(
            {
                "Id": i_id,
                "ParentId": i_category,
                "Price": i_fprice
            }
        );
    }
	
    createItem(i_id, i_clone, i_path, i_lname, i_sname, i_desc, i_items, i_global)
    {
        let item = JsonUtil.clone(i_items[i_clone]);
        item._id = i_id;
        //add item back to database
        i_items[i_id] = item;
        //add custom item names to all languages/locales
        for (const localeID in i_global)
        {
            i_global[localeID].templates[i_id] =
            {
                "Name": i_lname,
                "ShortName": i_sname,
                "Description": i_desc
            };
        }
    }
	
    createItemOffer(i_id, i_trader, i_price, i_currency, i_loyalty, i_traders)
    {
        i_traders[i_trader].assort.items.push(
            {
                "_id": i_id,
                "_tpl": i_id,
                "parentId": "hideout",
                "slotId": "hideout",
                "upd":
                {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 999999
                }
            }
        );
        //add trader cost to item
        i_traders[i_trader].assort.barter_scheme[i_id] = [
            [
                {
                    "count": i_price,
                    "_tpl": i_currency
                }
            ]
        ];
        //add trader loyalty level to item
        i_traders[i_trader].assort.loyal_level_items[i_id] = i_loyalty;
        //add item stack to fleamarket
        i_traders.ragfair.assort.items.push(
            {
                "_id": i_id,
                "_tpl": i_id,
                "parentId": "hideout",
                "slotId": "hideout",
                "upd":
                {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 999999
                }
            }
        );
        i_traders.ragfair.assort.loyal_level_items[i_id] = 1;
    }
}
export const Mod = PROTECClava;