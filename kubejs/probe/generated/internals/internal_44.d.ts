/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class BalloonMushroomBlockItem extends Internal.BlockItem {
        constructor(block: Internal.Block_, properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(level: Internal.Level_, player: Internal.Player_, interactionHand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type BalloonMushroomBlockItem_ = BalloonMushroomBlockItem;
    class WarpScroll extends Internal.ModItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        withTooltip(arg0: string): Internal.ModItem;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        withRarity(arg0: Internal.Rarity_): Internal.ModItem;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        withTooltip(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        "withTooltip(net.minecraft.network.chat.Component)"(arg0: net.minecraft.network.chat.Component_): Internal.ModItem;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        "withTooltip(java.lang.String)"(arg0: string): Internal.ModItem;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type WarpScroll_ = WarpScroll;
    class ImageResourceConfig extends Internal.ResourceConfigValue<ResourceLocation> {
        constructor()
        getResource(): Internal.SelectableResource<ResourceLocation>;
        setDefaultValue(defaultValue: ResourceLocation_): void;
        onClicked(clicked: Internal.Widget_, button: Internal.MouseButton_, callback: Internal.ConfigCallback_): void;
        getIcon(v: ResourceLocation_): Internal.Icon;
        getTooltip(): string;
        notify(): void;
        fixedResourceSize(): Internal.OptionalLong;
        compareTo(arg0: any): number;
        getValue(): ResourceLocation;
        setValue(value: ResourceLocation_): void;
        compareTo(o: Internal.ConfigValue_<ResourceLocation>): number;
        init(group: Internal.ConfigGroup_, id: string, value: ResourceLocation_, setter: Internal.Consumer_<ResourceLocation>, defaultValue: ResourceLocation_): Internal.ConfigValue<ResourceLocation>;
        getDefaultValue(): ResourceLocation;
        getStringForGUI(): net.minecraft.network.chat.Component;
        static getResourceLocation(icon: Internal.Icon_): ResourceLocation;
        applyValue(): void;
        setCurrentValue(v: ResourceLocation_): boolean;
        setAllowEmpty(allowEmpty: boolean): void;
        getColor(v: ResourceLocation_): Internal.Color4I;
        getStringForGUI(v: ResourceLocation_): net.minecraft.network.chat.Component;
        copy(value: ResourceLocation_): ResourceLocation;
        canHaveNBT(): boolean;
        wait(): void;
        getNameKey(): string;
        "compareTo(java.lang.Object)"(arg0: any): number;
        setAllowNBTEdit(allow: boolean): Internal.ResourceConfigValue<ResourceLocation>;
        getClass(): typeof any;
        addInfo(list: Internal.TooltipList_): void;
        setResource(selectedStack: Internal.SelectableResource_<ResourceLocation>): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        getIcon(): Internal.Icon;
        getName(): string;
        getGroup(): Internal.ConfigGroup;
        getColor(): Internal.Color4I;
        getPath(): string;
        allowEmptyResource(): boolean;
        setIcon(i: Internal.Icon_): Internal.ConfigValue<ResourceLocation>;
        toString(): string;
        notifyAll(): void;
        isEqual(v1: ResourceLocation_, v2: ResourceLocation_): boolean;
        static info(key: string, value: any): net.minecraft.network.chat.Component;
        hashCode(): number;
        setOrder(o: number): Internal.ConfigValue<ResourceLocation>;
        "compareTo(dev.ftb.mods.ftblibrary.config.ConfigValue)"(o: Internal.ConfigValue_<ResourceLocation>): number;
        setCanEdit(e: boolean): Internal.ConfigValue<ResourceLocation>;
        wait(arg0: number): void;
        getCanEdit(): boolean;
        setNameKey(key: string): Internal.ConfigValue<ResourceLocation>;
        equals(arg0: any): boolean;
        get resource(): Internal.SelectableResource<ResourceLocation>
        set defaultValue(defaultValue: ResourceLocation_)
        get tooltip(): string
        get value(): ResourceLocation
        set value(value: ResourceLocation_)
        get defaultValue(): ResourceLocation
        get stringForGUI(): net.minecraft.network.chat.Component
        set currentValue(v: ResourceLocation_)
        set allowEmpty(allowEmpty: boolean)
        get nameKey(): string
        set allowNBTEdit(allow: boolean)
        get class(): typeof any
        set resource(selectedStack: Internal.SelectableResource_<ResourceLocation>)
        get empty(): boolean
        get icon(): Internal.Icon
        get name(): string
        get group(): Internal.ConfigGroup
        get color(): Internal.Color4I
        get path(): string
        set icon(i: Internal.Icon_)
        set order(o: number)
        set canEdit(e: boolean)
        get canEdit(): boolean
        set nameKey(key: string)
        static readonly NONE: (ResourceLocation) & (ResourceLocation);
    }
    type ImageResourceConfig_ = ImageResourceConfig;
    class PigmentMixingRecipeSerializer <RECIPE extends Internal.PigmentMixingRecipe> extends Internal.ChemicalChemicalToChemicalRecipeSerializer<Internal.Pigment, Internal.PigmentStack, Internal.ChemicalStackIngredient$PigmentStackIngredient, RECIPE> {
        constructor(factory: any_<Internal.Pigment, Internal.PigmentStack, Internal.ChemicalStackIngredient$PigmentStackIngredient, RECIPE>)
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(buffer: Internal.FriendlyByteBuf_, recipe: Internal.Recipe_<any>): void;
        notifyAll(): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): RECIPE;
        toNetwork(buffer: Internal.FriendlyByteBuf_, recipe: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(recipeId: ResourceLocation_, json: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,mekanism.api.recipes.PigmentMixingRecipe)"(buffer: Internal.FriendlyByteBuf_, recipe: RECIPE): void;
        fromJson(recipeId: ResourceLocation_, json: Internal.JsonObject_): RECIPE;
        toNetwork(buffer: Internal.FriendlyByteBuf_, recipe: RECIPE): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(recipeId: ResourceLocation_, json: Internal.JsonObject_): RECIPE;
        fromJson(recipeId: ResourceLocation_, json: Internal.JsonObject_): Internal.Recipe<any>;
        fromNetwork(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): RECIPE;
        wait(): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): RECIPE;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        fromNetwork(recipeId: ResourceLocation_, buffer: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type PigmentMixingRecipeSerializer_<RECIPE extends Internal.PigmentMixingRecipe> = PigmentMixingRecipeSerializer<RECIPE>;
    interface OptionInstance$CycleableValueSet$ValueSetter <T> {
        abstract set(arg0: Internal.OptionInstance_<T>, arg1: T): void;
        (arg0: Internal.OptionInstance<T>, arg1: T): void;
    }
    type OptionInstance$CycleableValueSet$ValueSetter_<T> = OptionInstance$CycleableValueSet$ValueSetter<T> | ((arg0: Internal.OptionInstance<T>, arg1: T)=> void);
    class BlackHoleUnitBlock$BlackHoleUnitItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_, arg2: Internal.Rarity_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type BlackHoleUnitBlock$BlackHoleUnitItem_ = BlackHoleUnitBlock$BlackHoleUnitItem;
    class EnchantersSword extends Internal.SwordItem implements Internal.IManaDiscountEquipment, Internal.ICasterTool, Internal.GeoItem {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
        getManaDiscount(arg0: Internal.ItemStack_, arg1: Internal.Spell_): number;
        onNextKeyPressed(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getSpellCaster(): Internal.ISpellCaster;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        onQuickCast(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_, arg2: Internal.InteractionHand_, arg3: number): void;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onPreviousKeyPressed(arg0: Internal.ItemStack_, arg1: Internal.ServerPlayer_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canQuickCast(): boolean;
        "getSpellCaster(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ISpellCaster;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDamage(): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isScribedSpellValid(arg0: Internal.ISpellCaster_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.ItemStack_, arg4: Internal.Spell_): boolean;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getTier(): Internal.Tier;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getInformation(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        onOpenBookMenuKeyPressed(arg0: Internal.ItemStack_, arg1: Internal.Player_): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        sendInvalidMessage(arg0: Internal.Player_): void;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        onScribe(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        "getSpellCaster(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): Internal.ISpellCaster;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getSpellCaster(arg0: Internal.ItemStack_): Internal.ISpellCaster;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getManaDiscount(arg0: Internal.ItemStack_): number;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        sendSetMessage(arg0: Internal.Player_): void;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        shouldDisplay(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        setSpell(arg0: Internal.ISpellCaster_, arg1: Internal.Player_, arg2: Internal.InteractionHand_, arg3: Internal.ItemStack_, arg4: Internal.Spell_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSpellCaster(arg0: Internal.CompoundTag_): Internal.ISpellCaster;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get perspectiveAware(): boolean
        get spellCaster(): Internal.ISpellCaster
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get damage(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        get boneResetTime(): number
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        factory: Internal.AnimatableInstanceCache;
    }
    type EnchantersSword_ = EnchantersSword;
    class ConfigProperty$DecimalFormatter extends Internal.Enum<Internal.ConfigProperty$DecimalFormatter> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ConfigProperty$DecimalFormatter>>;
        getDeclaringClass(): typeof Internal.ConfigProperty$DecimalFormatter;
        toString(): string;
        compareTo(arg0: Internal.ConfigProperty$DecimalFormatter_): number;
        static valueOf(arg0: string): Internal.ConfigProperty$DecimalFormatter;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        "compareTo(com.brandon3055.draconicevolution.api.config.ConfigProperty$DecimalFormatter)"(arg0: Internal.ConfigProperty$DecimalFormatter_): number;
        static values(): Internal.ConfigProperty$DecimalFormatter[];
        hashCode(): number;
        format(arg0: number): string;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static getSafe(arg0: number): Internal.ConfigProperty$DecimalFormatter;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ConfigProperty$DecimalFormatter
        static readonly RAW_0: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly RAW_1: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly PLUS_PERCENT_1: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly PLUS_PERCENT_0: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly RAW_4: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly RAW_2: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly RAW_3: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly PLUS_PERCENT_2: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly AOE_0: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly AOE_1: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly PERCENT_0: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly AOE_2: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly PERCENT_1: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
        static readonly PERCENT_2: (Internal.ConfigProperty$DecimalFormatter) & (Internal.ConfigProperty$DecimalFormatter);
    }
    type ConfigProperty$DecimalFormatter_ = "raw_1" | "percent_1" | "raw_0" | "percent_2" | "raw_3" | "raw_2" | "percent_0" | "plus_percent_1" | "plus_percent_0" | ConfigProperty$DecimalFormatter | "plus_percent_2" | "raw_4" | "aoe_0" | "aoe_1" | "aoe_2";
    class ModelBuilder$FaceRotation extends Internal.Enum<Internal.ModelBuilder$FaceRotation> {
        compareTo(arg0: Internal.ModelBuilder$FaceRotation_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ModelBuilder$FaceRotation>>;
        toString(): string;
        notifyAll(): void;
        getDeclaringClass(): typeof Internal.ModelBuilder$FaceRotation;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.ModelBuilder$FaceRotation;
        name(): string;
        hashCode(): number;
        static values(): Internal.ModelBuilder$FaceRotation[];
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(net.minecraftforge.client.model.generators.ModelBuilder$FaceRotation)"(arg0: Internal.ModelBuilder$FaceRotation_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ModelBuilder$FaceRotation
        static readonly COUNTERCLOCKWISE_90: (Internal.ModelBuilder$FaceRotation) & (Internal.ModelBuilder$FaceRotation);
        static readonly ZERO: (Internal.ModelBuilder$FaceRotation) & (Internal.ModelBuilder$FaceRotation);
        static readonly CLOCKWISE_90: (Internal.ModelBuilder$FaceRotation) & (Internal.ModelBuilder$FaceRotation);
        static readonly UPSIDE_DOWN: (Internal.ModelBuilder$FaceRotation) & (Internal.ModelBuilder$FaceRotation);
    }
    type ModelBuilder$FaceRotation_ = "zero" | "clockwise_90" | "upside_down" | ModelBuilder$FaceRotation | "counterclockwise_90";
    class SacrificeKnifeUsedEvent extends net.minecraftforge.eventbus.api.Event {
        constructor()
        constructor(arg0: Internal.Player_, arg1: boolean, arg2: boolean, arg3: number, arg4: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        readonly healthDrained: number;
        readonly player: Internal.Player;
        lpAdded: number;
        shouldFillAltar: boolean;
        shouldDrainHealth: boolean;
    }
    type SacrificeKnifeUsedEvent_ = SacrificeKnifeUsedEvent;
    class MonsterRoomFeature extends Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type MonsterRoomFeature_ = MonsterRoomFeature;
    class AndRecipeComponent <A, B> extends Internal.Record implements Internal.RecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>> {
        constructor(a: Internal.RecipeComponent_<A>, b: Internal.RecipeComponent_<B>)
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, org.apache.commons.lang3.tuple.Pair<A, B>>>;
        getClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        replaceInput(recipe: Internal.RecipeJS_, original: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): org.apache.commons.lang3.tuple.Pair<A, B>;
        checkEmpty(key: Internal.RecipeKey_<org.apache.commons.lang3.tuple.Pair<A, B>>, value: org.apache.commons.lang3.tuple.Pair_<A, B>): string;
        b(): Internal.RecipeComponent<B>;
        role(): Internal.ComponentRole;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, json: Internal.JsonObject_): void;
        notify(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,org.apache.commons.lang3.tuple.Pair)"(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>): Internal.JsonArray;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        write(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>): Internal.JsonArray;
        key(name: string): Internal.RecipeKey<org.apache.commons.lang3.tuple.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, org.apache.commons.lang3.tuple.Pair<A, B>>>;
        orSelf(): Internal.RecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<org.apache.commons.lang3.tuple.Pair<A, B>>, map: Internal.Map_<any, any>): void;
        notifyAll(): void;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>, O>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        a(): Internal.RecipeComponent<A>;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        asArray(): Internal.ArrayRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>>;
        replaceOutput(recipe: Internal.RecipeJS_, original: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): org.apache.commons.lang3.tuple.Pair<A, B>;
        hashCode(): number;
        isInput(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_): boolean;
        checkValueHasChanged(oldValue: org.apache.commons.lang3.tuple.Pair_<A, B>, newValue: org.apache.commons.lang3.tuple.Pair_<A, B>): boolean;
        wait(): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<org.apache.commons.lang3.tuple.Pair<A, B>, O>;
        wait(arg0: number): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        equals(o: any): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: org.apache.commons.lang3.tuple.Pair_<A, B>, match: Internal.ReplacementMatch_): boolean;
        get class(): typeof any
    }
    type AndRecipeComponent_<A, B> = AndRecipeComponent<A, B>;
    class PushboxHandler$State {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        resetForModule(arg0: Internal.ModuleSession_<any>, arg1: number, arg2: number, arg3: number): this;
        get class(): typeof any
        x: number;
        h: number;
        y: number;
        w: number;
    }
    type PushboxHandler$State_ = PushboxHandler$State;
    class BiomeSpecialEffects$Builder {
        constructor()
        getClass(): typeof any;
        ambientAdditionsSound(arg0: Internal.AmbientAdditionsSettings_): this;
        grassColorOverride(arg0: number): this;
        toString(): string;
        fogColor(arg0: number): this;
        ambientLoopSound(arg0: Internal.Holder_<Internal.SoundEvent>): this;
        backgroundMusic(arg0: Internal.Music_): this;
        notifyAll(): void;
        waterColor(arg0: number): this;
        ambientMoodSound(arg0: Internal.AmbientMoodSettings_): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        ambientParticle(arg0: Internal.AmbientParticleSettings_): this;
        build(): Internal.BiomeSpecialEffects;
        waterFogColor(arg0: number): this;
        hashCode(): number;
        foliageColorOverride(arg0: number): this;
        wait(): void;
        wait(arg0: number): void;
        skyColor(arg0: number): this;
        equals(arg0: any): boolean;
        grassColorModifier(arg0: Internal.BiomeSpecialEffects$GrassColorModifier_): this;
        get class(): typeof any
        grassColorOverride: Internal.Optional<number>;
        ambientParticle: Internal.Optional<Internal.AmbientParticleSettings>;
        ambientMoodSettings: Internal.Optional<Internal.AmbientMoodSettings>;
        fogColor: Internal.OptionalInt;
        ambientLoopSoundEvent: Internal.Optional<Internal.Holder<Internal.SoundEvent>>;
        grassColorModifier: Internal.BiomeSpecialEffects$GrassColorModifier;
        ambientAdditionsSettings: Internal.Optional<Internal.AmbientAdditionsSettings>;
        waterColor: Internal.OptionalInt;
        skyColor: Internal.OptionalInt;
        foliageColorOverride: Internal.Optional<number>;
        waterFogColor: Internal.OptionalInt;
        backgroundMusic: Internal.Optional<Internal.Music>;
    }
    type BiomeSpecialEffects$Builder_ = BiomeSpecialEffects$Builder;
    class PeculiarBellBlockEntity extends Internal.AbstractBellBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        destroy(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        invalidate(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        sendData(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getAttached(type: Internal.AttachmentType_<any>): any;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        ring(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        getBellModel(): Internal.PartialModel;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        initialize(): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        tick(): void;
        canPlayerUse(arg0: Internal.Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        notifyUpdate(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get bellModel(): Internal.PartialModel
        get blockState(): Internal.BlockState
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
    }
    type PeculiarBellBlockEntity_ = PeculiarBellBlockEntity;
    abstract class CustomBuffer <SELF extends Internal.CustomBuffer<SELF>> extends Internal.Pointer$Default {
        getClass(): typeof any;
        capacity(): number;
        mark(): SELF;
        limit(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        clear(): SELF;
        position(arg0: number): SELF;
        flip(): SELF;
        slice(arg0: number, arg1: number): SELF;
        duplicate(): SELF;
        address(): number;
        compact(): SELF;
        toString(): string;
        remaining(): number;
        free(): void;
        position(): number;
        address(arg0: number): number;
        notifyAll(): void;
        put(arg0: SELF): SELF;
        rewind(): SELF;
        abstract sizeof(): number;
        limit(arg0: number): SELF;
        slice(): SELF;
        hashCode(): number;
        reset(): SELF;
        address0(): number;
        hasRemaining(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type CustomBuffer_<SELF extends Internal.CustomBuffer<SELF>> = CustomBuffer<SELF>;
    interface UserAuthentication {
        abstract getSelectedProfile(): Internal.GameProfile;
        abstract loadFromStorage(arg0: Internal.Map_<string, any>): void;
        abstract logOut(): void;
        abstract setPassword(arg0: string): void;
        abstract logIn(): void;
        abstract getAuthenticatedToken(): string;
        abstract getUserProperties(): Internal.PropertyMap;
        abstract getUserID(): string;
        abstract isLoggedIn(): boolean;
        abstract canPlayOnline(): boolean;
        abstract getAvailableProfiles(): Internal.GameProfile[];
        abstract setUsername(arg0: string): void;
        abstract getUserType(): Internal.UserType;
        abstract selectGameProfile(arg0: Internal.GameProfile_): void;
        abstract saveForStorage(): Internal.Map<string, any>;
        abstract canLogIn(): boolean;
        get selectedProfile(): Internal.GameProfile
        set password(arg0: string)
        get authenticatedToken(): string
        get userProperties(): Internal.PropertyMap
        get userID(): string
        get loggedIn(): boolean
        get availableProfiles(): Internal.GameProfile[]
        set username(arg0: string)
        get userType(): Internal.UserType
    }
    type UserAuthentication_ = UserAuthentication;
    class ForgeMod$3 extends Internal.FluidType {
        canSwim(arg0: Internal.Entity_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getRarity(): Internal.Rarity;
        getDescriptionId(): string;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        getViscosity(): number;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getClass(): typeof any;
        motionScale(arg0: Internal.Entity_): number;
        isVanilla(): boolean;
        getRenderPropertiesInternal(): any;
        getLightLevel(arg0: Internal.FluidStack_): number;
        isAir(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidStack_): number;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        toString(): string;
        canHydrate(arg0: Internal.Entity_): boolean;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getDescription(arg0: Internal.FluidStack_): net.minecraft.network.chat.Component;
        getViscosity(arg0: Internal.FluidStack_): number;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get rarity(): Internal.Rarity
        get descriptionId(): string
        get temperature(): number
        get description(): net.minecraft.network.chat.Component
        get viscosity(): number
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
    }
    type ForgeMod$3_ = ForgeMod$3;
    class ItemBlockMimic extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        canReplaceBlock(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        canReplaceTile(arg0: Internal.BlockEntity_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        notify(): void;
        quark$getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getTagFromTileEntity(arg0: Internal.BlockEntity_): Internal.CompoundTag;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemBlockMimic_ = ItemBlockMimic;
    interface ITileWrapper {
        abstract getTilePos(): BlockPos;
        getTileCoord(): Internal.Coord4D;
        getTileChunk(): Internal.Chunk3D;
        abstract getTileWorld(): Internal.Level;
        get tilePos(): BlockPos
        get tileCoord(): Internal.Coord4D
        get tileChunk(): Internal.Chunk3D
        get tileWorld(): Internal.Level
    }
    type ITileWrapper_ = ITileWrapper;
    class ForgeMod$4 extends Internal.FluidType {
        canSwim(arg0: Internal.Entity_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getRarity(): Internal.Rarity;
        getDescriptionId(): string;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        getViscosity(): number;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getClass(): typeof any;
        motionScale(arg0: Internal.Entity_): number;
        isVanilla(): boolean;
        getRenderPropertiesInternal(): any;
        getLightLevel(arg0: Internal.FluidStack_): number;
        isAir(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidStack_): number;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        toString(): string;
        canHydrate(arg0: Internal.Entity_): boolean;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getDescription(arg0: Internal.FluidStack_): net.minecraft.network.chat.Component;
        getViscosity(arg0: Internal.FluidStack_): number;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get rarity(): Internal.Rarity
        get descriptionId(): string
        get temperature(): number
        get description(): net.minecraft.network.chat.Component
        get viscosity(): number
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
    }
    type ForgeMod$4_ = ForgeMod$4;
    class ForgeMod$1 extends Internal.FluidType {
        canSwim(arg0: Internal.Entity_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getRarity(): Internal.Rarity;
        getDescriptionId(): string;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        getViscosity(): number;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getClass(): typeof any;
        motionScale(arg0: Internal.Entity_): number;
        isVanilla(): boolean;
        getRenderPropertiesInternal(): any;
        getLightLevel(arg0: Internal.FluidStack_): number;
        isAir(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidStack_): number;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        toString(): string;
        canHydrate(arg0: Internal.Entity_): boolean;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getDescription(arg0: Internal.FluidStack_): net.minecraft.network.chat.Component;
        getViscosity(arg0: Internal.FluidStack_): number;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get rarity(): Internal.Rarity
        get descriptionId(): string
        get temperature(): number
        get description(): net.minecraft.network.chat.Component
        get viscosity(): number
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
    }
    type ForgeMod$1_ = ForgeMod$1;
    class ForgeMod$2 extends Internal.FluidType {
        canSwim(arg0: Internal.Entity_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getRarity(): Internal.Rarity;
        getDescriptionId(): string;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        getViscosity(): number;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getClass(): typeof any;
        motionScale(arg0: Internal.Entity_): number;
        isVanilla(): boolean;
        getRenderPropertiesInternal(): any;
        getLightLevel(arg0: Internal.FluidStack_): number;
        isAir(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        getDensity(arg0: Internal.FluidStack_): number;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        toString(): string;
        canHydrate(arg0: Internal.Entity_): boolean;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getDescription(arg0: Internal.FluidStack_): net.minecraft.network.chat.Component;
        getViscosity(arg0: Internal.FluidStack_): number;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get rarity(): Internal.Rarity
        get descriptionId(): string
        get temperature(): number
        get description(): net.minecraft.network.chat.Component
        get viscosity(): number
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
    }
    type ForgeMod$2_ = ForgeMod$2;
    interface AEToolItem {
    }
    type AEToolItem_ = AEToolItem;
    class PartReaderAspectEvent <P extends Internal.IPartTypeReader<P, S>, S extends Internal.IPartStateReader<P>, A extends Internal.IAspectRead<any, any>> extends Internal.PartAspectEvent<P, S, A> {
        constructor()
        constructor(arg0: Internal.INetwork_, arg1: Internal.IPartNetwork_, arg2: Internal.PartTarget_, arg3: P, arg4: S, arg5: Internal.Player_, arg6: A, arg7: Internal.ItemStack_)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getNetwork(): Internal.INetwork;
        setPhase(arg0: Internal.EventPriority_): void;
        getPartState(): S;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getTarget(): Internal.PartTarget;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        getAspect(): A;
        getResult(): Internal.Event$Result;
        toString(): string;
        getEntityPlayer(): Internal.Player;
        notifyAll(): void;
        getPartType(): P;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        setItemStack(arg0: Internal.ItemStack_): void;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getPartNetwork(): Internal.IPartNetwork;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        set canceled(arg0: boolean)
        get class(): typeof any
        get network(): Internal.INetwork
        set phase(arg0: Internal.EventPriority_)
        get partState(): S
        get canceled(): boolean
        get target(): Internal.PartTarget
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get aspect(): A
        get result(): Internal.Event$Result
        get entityPlayer(): Internal.Player
        get partType(): P
        set result(arg0: Internal.Event$Result_)
        set itemStack(arg0: Internal.ItemStack_)
        get phase(): Internal.EventPriority
        get partNetwork(): Internal.IPartNetwork
        get itemStack(): Internal.ItemStack
    }
    type PartReaderAspectEvent_<P extends Internal.IPartTypeReader<P, S>, S extends Internal.IPartStateReader<P>, A extends Internal.IAspectRead<any, any>> = PartReaderAspectEvent<P, S, A>;
    abstract class LootModificationEventJS extends Internal.EventJS {
        constructor()
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        addEntityLootModifier(...entities: Internal.EntityType_<any>[]): Internal.LootActionsBuilderJS;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        disableWitherStarDrop(): void;
        enableLogging(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        addBlockLootModifier(o: any): Internal.LootActionsBuilderJS;
        disableCreeperHeadDrop(): void;
        toString(): string;
        addLootTypeModifier(...types: LootType_[]): Internal.LootActionsBuilderJS;
        disableZombieHeadDrop(): void;
        notifyAll(): void;
        addLootTableModifier(...filters: Internal.ResourceLocationFilter_[]): Internal.LootActionsBuilderJS;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        disableSkeletonHeadDrop(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        disableLootModification(...filters: Internal.ResourceLocationFilter_[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type LootModificationEventJS_ = LootModificationEventJS;
    interface IVariableFacade {
        validate(arg0: Internal.INetwork_, arg1: Internal.IPartNetwork_, arg2: Internal.IVariableFacade$IValidator_, arg3: Internal.IValueType_<any>): void;
        abstract isValid(): boolean;
        abstract getOutputType(): Internal.IValueType<any>;
        abstract addModelOverlay(arg0: Internal.IVariableModelBaked_, arg1: Internal.List_<Internal.BakedQuad>, arg2: Internal.RandomSource_, arg3: Internal.ModelData_): void;
        abstract appendHoverText(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.Level_): void;
        renderISTER(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number, arg5: number): void;
        getVariableItemOverrideModel(arg0: Internal.BakedModel_, arg1: Internal.ItemStack_, arg2: Internal.ClientLevel_, arg3: Internal.LivingEntity_): Internal.BakedModel;
        abstract getLabel(): string;
        /**
         * @deprecated
        */
        abstract validate(arg0: Internal.IPartNetwork_, arg1: Internal.IVariableFacade$IValidator_, arg2: Internal.IValueType_<any>): void;
        getVariable<V extends Internal.IValue>(arg0: Internal.INetwork_, arg1: Internal.IPartNetwork_): Internal.IVariable<V>;
        abstract getId(): number;
        /**
         * @deprecated
        */
        abstract getVariable<V extends Internal.IValue>(arg0: Internal.IPartNetwork_): Internal.IVariable<V>;
        get valid(): boolean
        get outputType(): Internal.IValueType<any>
        get label(): string
        get id(): number
    }
    type IVariableFacade_ = IVariableFacade;
    interface IClientFluidTypeExtensions {
        getFlowingTexture(arg0: Internal.FluidStack_): ResourceLocation;
        getTintColor(arg0: Internal.FluidStack_): number;
        getFlowingTexture(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): ResourceLocation;
        modifyFogColor(arg0: Internal.Camera_, arg1: number, arg2: Internal.ClientLevel_, arg3: number, arg4: number, arg5: Vec3f_): Vec3f;
        modifyFogRender(arg0: Internal.Camera_, arg1: Internal.FogRenderer$FogMode_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.FogShape_): void;
        getTintColor(): number;
        of(arg0: Internal.FluidState_): this;
        "of(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): this;
        getStillTexture(arg0: Internal.FluidStack_): ResourceLocation;
        getOverlayTexture(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): ResourceLocation;
        of(arg0: Internal.Fluid_): this;
        of(arg0: Internal.FluidType_): this;
        getOverlayTexture(): ResourceLocation;
        getFlowingTexture(): ResourceLocation;
        "of(net.minecraft.world.level.material.Fluid)"(arg0: Internal.Fluid_): this;
        getOverlayTexture(arg0: Internal.FluidStack_): ResourceLocation;
        renderOverlay(arg0: Internal.Minecraft_, arg1: Internal.PoseStack_): void;
        getRenderOverlayTexture(arg0: Internal.Minecraft_): ResourceLocation;
        getStillTexture(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): ResourceLocation;
        getTintColor(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getStillTexture(): ResourceLocation;
        "of(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): this;
        get tintColor(): number
        get overlayTexture(): ResourceLocation
        get flowingTexture(): ResourceLocation
        get stillTexture(): ResourceLocation
        readonly DEFAULT: Internal.IClientFluidTypeExtensions;
    }
    type IClientFluidTypeExtensions_ = IClientFluidTypeExtensions;
    class MaxManaCalcEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        setMax(arg0: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getReserve(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        setReserve(arg0: number): void;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getMax(): number;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        set max(arg0: number)
        get reserve(): number
        set result(arg0: Internal.Event$Result_)
        set reserve(arg0: number)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get max(): number
        get phase(): Internal.EventPriority
    }
    type MaxManaCalcEvent_ = MaxManaCalcEvent;
    class ChemicalType extends Internal.Enum<Internal.ChemicalType> implements Internal.StringRepresentable {
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static "getTypeFor(mekanism.api.chemical.ChemicalStack)"(arg0: Internal.ChemicalStack_<any>): Internal.ChemicalType;
        getSerializedName(): string;
        static fromNBT(arg0: Internal.CompoundTag_): Internal.ChemicalType;
        write(arg0: Internal.CompoundTag_): void;
        static valueOf(arg0: string): Internal.ChemicalType;
        "compareTo(mekanism.api.chemical.ChemicalType)"(arg0: Internal.ChemicalType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static getTypeFor(arg0: Internal.Chemical_<any>): Internal.ChemicalType;
        static values(): Internal.ChemicalType[];
        isInstance(arg0: Internal.Chemical_<any>): boolean;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ChemicalType>>;
        static getTypeFor(arg0: Internal.ChemicalStack_<any>): Internal.ChemicalType;
        compareTo(arg0: Internal.ChemicalType_): number;
        static fromString(arg0: string): Internal.ChemicalType;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        toString(): string;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        static "getTypeFor(mekanism.api.chemical.Chemical)"(arg0: Internal.Chemical_<any>): Internal.ChemicalType;
        wait(arg0: number): void;
        static "getTypeFor(mekanism.api.recipes.ingredients.ChemicalStackIngredient)"(arg0: Internal.ChemicalStackIngredient_<any, any>): Internal.ChemicalType;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static getTypeFor(arg0: Internal.ChemicalStackIngredient_<any, any>): Internal.ChemicalType;
        getDeclaringClass(): typeof Internal.ChemicalType;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.ChemicalType
        static readonly SLURRY: (Internal.ChemicalType) & (Internal.ChemicalType);
        static readonly PIGMENT: (Internal.ChemicalType) & (Internal.ChemicalType);
        static readonly GAS: (Internal.ChemicalType) & (Internal.ChemicalType);
        static readonly INFUSION: (Internal.ChemicalType) & (Internal.ChemicalType);
    }
    type ChemicalType_ = "pigment" | ChemicalType | "gas" | "slurry" | "infusion";
    class SuperRenderTypeBuffer implements Internal.MultiBufferSource {
        constructor()
        getClass(): typeof any;
        getEarlyBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        static immediate(arg0: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        toString(): string;
        draw(): void;
        notifyAll(): void;
        getBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        notify(): void;
        static immediateWithBuffers(arg0: Internal.Map_<Internal.RenderType, Internal.BufferBuilder>, arg1: Internal.BufferBuilder_): Internal.MultiBufferSource$BufferSource;
        wait(arg0: number, arg1: number): void;
        getLateBuffer(arg0: Internal.RenderType_): Internal.VertexConsumer;
        hashCode(): number;
        draw(arg0: Internal.RenderType_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static getInstance(): Internal.SuperRenderTypeBuffer;
        get class(): typeof any
        get instance(): Internal.SuperRenderTypeBuffer
    }
    type SuperRenderTypeBuffer_ = SuperRenderTypeBuffer;
    interface CreativeTabStackProvider {
        abstract getStacksForItem(): Internal.Stream<Internal.ItemStack>;
        get stacksForItem(): Internal.Stream<Internal.ItemStack>
        (): Internal.Stream_<Internal.ItemStack>;
    }
    type CreativeTabStackProvider_ = (()=> Internal.Stream_<Internal.ItemStack>) | CreativeTabStackProvider;
    interface PlayableResourceWithAudio extends Internal.PlayableResource {
        abstract open(): Internal.InputStream;
        abstract isPaused(): boolean;
        abstract isLoadingCompleted(): boolean;
        waitForLoadingCompletedOrFailed(arg0: number): void;
        abstract isClosed(): boolean;
        abstract isReady(): boolean;
        abstract getVolume(): number;
        abstract isPlaying(): boolean;
        abstract play(): void;
        waitForReady(arg0: number): void;
        abstract close(): void;
        abstract stop(): void;
        abstract setVolume(arg0: number): void;
        abstract pause(): void;
        abstract isLoadingFailed(): boolean;
        get paused(): boolean
        get loadingCompleted(): boolean
        get closed(): boolean
        get ready(): boolean
        get volume(): number
        get playing(): boolean
        set volume(arg0: number)
        get loadingFailed(): boolean
    }
    type PlayableResourceWithAudio_ = PlayableResourceWithAudio;
    interface IBloodOrb {
        abstract getOrb(arg0: Internal.ItemStack_): Internal.BloodOrb;
        (arg0: Internal.ItemStack): Internal.BloodOrb_;
    }
    type IBloodOrb_ = ((arg0: Internal.ItemStack)=> Internal.BloodOrb_) | IBloodOrb;
    interface RenderBuffersExt {
        abstract endLevelRendering(): void;
        abstract beginLevelRendering(): void;
    }
    type RenderBuffersExt_ = RenderBuffersExt;
    interface ISpellModifier {
        applyModifiers(arg0: Internal.SpellStats$Builder_, arg1: Internal.AbstractSpellPart_, arg2: Internal.HitResult_, arg3: Internal.Level_, arg4: Internal.LivingEntity_, arg5: Internal.SpellContext_): Internal.SpellStats$Builder;
    }
    type ISpellModifier_ = ISpellModifier;
    class ClickEvent$Action extends Internal.Enum<Internal.ClickEvent$Action> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        compareTo(arg0: Internal.ClickEvent$Action_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.ClickEvent$Action;
        getDeclaringClass(): typeof Internal.ClickEvent$Action;
        notify(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ClickEvent$Action>>;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.ClickEvent$Action[];
        name(): string;
        hashCode(): number;
        static getByName(arg0: string): Internal.ClickEvent$Action;
        isAllowedFromServer(): boolean;
        ordinal(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        "compareTo(net.minecraft.network.chat.ClickEvent$Action)"(arg0: Internal.ClickEvent$Action_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.ClickEvent$Action
        get allowedFromServer(): boolean
        get name(): string
        static readonly COPY_TO_CLIPBOARD: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly CHANGE_PAGE: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly OPEN_FILE: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly RUN_COMMAND: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly SUGGEST_COMMAND: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
        static readonly OPEN_URL: (Internal.ClickEvent$Action) & (Internal.ClickEvent$Action);
    }
    type ClickEvent$Action_ = "copy_to_clipboard" | "suggest_command" | "open_file" | "change_page" | ClickEvent$Action | "open_url" | "run_command";
    interface LycheeCounter {
        abstract lychee$getCount(): number;
        abstract lychee$setRecipeId(arg0: ResourceLocation_): void;
        lychee$update(arg0: ResourceLocation_, arg1: Internal.Recipe_<any>): void;
        abstract lychee$getRecipeId(): ResourceLocation;
        abstract lychee$setCount(arg0: number): void;
    }
    type LycheeCounter_ = LycheeCounter;
    class CopyNameFunction$NameSource extends Internal.Enum<Internal.CopyNameFunction$NameSource> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.CopyNameFunction$NameSource;
        toString(): string;
        compareTo(arg0: Internal.CopyNameFunction$NameSource_): number;
        notifyAll(): void;
        static getByName(arg0: string): Internal.CopyNameFunction$NameSource;
        getDeclaringClass(): typeof Internal.CopyNameFunction$NameSource;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        "compareTo(net.minecraft.world.level.storage.loot.functions.CopyNameFunction$NameSource)"(arg0: Internal.CopyNameFunction$NameSource_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.CopyNameFunction$NameSource>>;
        ordinal(): number;
        wait(): void;
        static values(): Internal.CopyNameFunction$NameSource[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.CopyNameFunction$NameSource
        readonly name: string;
        static readonly BLOCK_ENTITY: (Internal.CopyNameFunction$NameSource) & (Internal.CopyNameFunction$NameSource);
        readonly param: Internal.LootContextParam<any>;
        static readonly KILLER: (Internal.CopyNameFunction$NameSource) & (Internal.CopyNameFunction$NameSource);
        static readonly KILLER_PLAYER: (Internal.CopyNameFunction$NameSource) & (Internal.CopyNameFunction$NameSource);
        static readonly THIS: (Internal.CopyNameFunction$NameSource) & (Internal.CopyNameFunction$NameSource);
    }
    type CopyNameFunction$NameSource_ = "killer" | CopyNameFunction$NameSource | "killer_player" | "this" | "block_entity";
    class VampiricGloveItem extends Internal.WearableArtifactItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        static isActivated(stack: Internal.ItemStack_): boolean;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getFortuneLevel(): number;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        static onLivingDamage(entity: Internal.LivingEntity_, damageSource: Internal.DamageSource_, amount: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        makesPiglinsNeutral(): boolean;
        onUnequip(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        isEquippedBy(entity: Internal.LivingEntity_): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        toggleItem(player: Internal.ServerPlayer_): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        isCosmetic(): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        static setActivated(stack: Internal.ItemStack_, active: boolean): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        addCooldown(entity: Internal.LivingEntity_, ticks: number): void;
        isOnCooldown(entity: Internal.LivingEntity_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getLootingLevel(): number;
        wornTick(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        notify(): void;
        addAttributeModifier(attributeModifier: Internal.ArtifactAttributeModifier_): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        canWalkOnPowderedSnow(): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        getAttributeModifiers(): Internal.List<Internal.ArtifactAttributeModifier>;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltipList: Internal.List_<any>, flags: Internal.TooltipFlag_): void;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        hasNonCosmeticEffects(): boolean;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        findAllEquippedBy(entity: Internal.LivingEntity_): Internal.Stream<Internal.ItemStack>;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        onEquip(entity: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        get fortuneLevel(): number
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get cosmetic(): boolean
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get lootingLevel(): number
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get attributeModifiers(): Internal.List<Internal.ArtifactAttributeModifier>
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type VampiricGloveItem_ = VampiricGloveItem;
    interface DirectBeltInputBehaviour$OccupiedPredicate {
        abstract test(arg0: Internal.Direction_): boolean;
        (arg0: Internal.Direction): boolean;
    }
    type DirectBeltInputBehaviour$OccupiedPredicate_ = DirectBeltInputBehaviour$OccupiedPredicate | ((arg0: Internal.Direction)=> boolean);
    abstract class ConfigValue <T> implements Internal.Comparable<Internal.ConfigValue<T>> {
        constructor()
        getClass(): typeof any;
        setOrder(o: number): this;
        getStringForGUI(v: T): net.minecraft.network.chat.Component;
        addInfo(list: Internal.TooltipList_): void;
        getColor(v: T): Internal.Color4I;
        abstract onClicked(arg0: Internal.Widget_, arg1: Internal.MouseButton_, arg2: Internal.ConfigCallback_): void;
        getTooltip(): string;
        notify(): void;
        getDefaultValue(): T;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        compareTo(o: Internal.ConfigValue_<T>): number;
        getIcon(): Internal.Icon;
        setIcon(i: Internal.Icon_): this;
        getName(): string;
        getGroup(): Internal.ConfigGroup;
        getStringForGUI(): net.minecraft.network.chat.Component;
        getColor(): Internal.Color4I;
        getPath(): string;
        applyValue(): void;
        setNameKey(key: string): this;
        getIcon(v: T): Internal.Icon;
        toString(): string;
        notifyAll(): void;
        setCanEdit(e: boolean): this;
        init(group: Internal.ConfigGroup_, id: string, value: T, setter: Internal.Consumer_<T>, defaultValue: T): this;
        static info(key: string, value: any): net.minecraft.network.chat.Component;
        "compareTo(dev.ftb.mods.ftblibrary.config.ConfigValue)"(o: Internal.ConfigValue_<T>): number;
        hashCode(): number;
        setValue(value: T): void;
        wait(): void;
        getValue(): T;
        copy(value: T): T;
        getNameKey(): string;
        isEqual(v1: T, v2: T): boolean;
        wait(arg0: number): void;
        getCanEdit(): boolean;
        setDefaultValue(defaultValue: T): void;
        setCurrentValue(v: T): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        set order(o: number)
        get tooltip(): string
        get defaultValue(): T
        get icon(): Internal.Icon
        set icon(i: Internal.Icon_)
        get name(): string
        get group(): Internal.ConfigGroup
        get stringForGUI(): net.minecraft.network.chat.Component
        get color(): Internal.Color4I
        get path(): string
        set nameKey(key: string)
        set canEdit(e: boolean)
        set value(value: T)
        get value(): T
        get nameKey(): string
        get canEdit(): boolean
        set defaultValue(defaultValue: T)
        set currentValue(v: T)
        static readonly NULL_TEXT: (Internal.MutableComponent) & (net.minecraft.network.chat.Component);
        id: string;
    }
    type ConfigValue_<T> = ConfigValue<T>;
    class BuildingInfo$MinMax {
        constructor()
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.BuildingInfo$MinMax_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        min: number;
        max: number;
    }
    type BuildingInfo$MinMax_ = BuildingInfo$MinMax;
    class ItemMekaTool extends Internal.ItemEnergized implements Internal.IBlastingItem, Internal.IGenericRadialModeItem, Internal.IModuleContainerItem {
        constructor(properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(stack: Internal.ItemStack_, state: Internal.BlockState_): number;
        addModuleDetails(stack: Internal.ItemStack_, tooltip: Internal.List_<net.minecraft.network.chat.Component>): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(stack: Internal.ItemStack_, book: Internal.ItemStack_): boolean;
        getBlastedBlocks(world: Internal.Level_, player: Internal.Player_, stack: Internal.ItemStack_, pos: BlockPos_, state: Internal.BlockState_): Internal.Map<BlockPos, Internal.BlockState>;
        static isModeItem(player: Internal.Player_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getDestroyEnergy(itemStack: Internal.ItemStack_, hardness: number, silk: boolean): Internal.FloatingLong;
        getBarWidth(stack: Internal.ItemStack_): number;
        static isModeItem(player: Internal.Player_, slotType: Internal.EquipmentSlot_): boolean;
        setMaxDamage(arg0: number): void;
        getBarColor(stack: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(stack: Internal.ItemStack_, player: Internal.Player_, entity: Internal.LivingEntity_, hand: Internal.InteractionHand_): InteractionResult;
        hasEnergyForDigAction(stack: Internal.ItemStack_): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(world: Internal.Level_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addCurioHUDStrings(list: Internal.List_<net.minecraft.network.chat.Component>, player: Internal.Player_, stack: Internal.ItemStack_): void;
        getAllEnchantments(stack: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(slot: Internal.EquipmentSlot_, stack: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        addModule(stack: Internal.ItemStack_, type: mekanism.api.gear.ModuleData_<any>): void;
        getRadialData(stack: Internal.ItemStack_): Internal.RadialData<any>;
        getScrollTextComponent(stack: Internal.ItemStack_): net.minecraft.network.chat.Component;
        setAttackSpeed(attackSpeed: number): void;
        hasModule(stack: Internal.ItemStack_, type: Internal.IModuleDataProvider_<any>): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        addHUDStrings(list: Internal.List_<net.minecraft.network.chat.Component>, player: Internal.Player_, stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): void;
        isNotReplaceableByPickAction(stack: Internal.ItemStack_, player: Internal.Player_, inventorySlot: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static canBlastBlock(world: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_): boolean;
        static isModeItem(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        removeModule(stack: Internal.ItemStack_, type: mekanism.api.gear.ModuleData_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(stack: Internal.ItemStack_, world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, entityliving: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        changeMode(player: Internal.Player_, stack: Internal.ItemStack_, shift: number, displayChange: Internal.IModeItem$DisplayChange_): void;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(slot: Internal.EquipmentSlot_, stack: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        static displayModeChange(player: Internal.Player_): void;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        getModule<MODULE extends Internal.ICustomModule<MODULE>>(stack: Internal.ItemStack_, typeProvider: Internal.IModuleDataProvider_<MODULE>): Internal.IModule<MODULE>;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        supportsModule(stack: Internal.ItemStack_, typeProvider: Internal.IModuleDataProvider_<any>): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        supportsSlotType(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(stack: Internal.ItemStack_, enchantment: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        static "isModeItem(net.minecraft.world.entity.player.Player,net.minecraft.world.entity.EquipmentSlot,boolean)"(player: Internal.Player_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        getModules(stack: Internal.ItemStack_): Internal.List<mekanism.common.content.gear.Module<any>>;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(stack: Internal.ItemStack_, nbt: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getMode<M extends Internal.IRadialMode>(stack: Internal.ItemStack_, radialData: Internal.RadialData_<M>): M;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        addDefault(): boolean;
        canPerformAction(stack: Internal.ItemStack_, action: Internal.ToolAction_): boolean;
        static "isModeItem(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(context: Internal.UseOnContext_): InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        isModuleEnabled(stack: Internal.ItemStack_, type: Internal.IModuleDataProvider_<any>): boolean;
        shouldCauseBlockBreakReset(oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(stack: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(stack: Internal.ItemStack_, enchantment: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(stack: Internal.ItemStack_, pos: BlockPos_, player: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        addItems(tabOutput: Internal.CreativeModeTab$Output_): void;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        notify(): void;
        isBarVisible(stack: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static "isModeItem(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot,boolean)"(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_, allowRadial: boolean): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(state: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        static findPositions(world: Internal.Level_, targetPos: BlockPos_, player: Internal.Player_, radius: number): Internal.Map<BlockPos, Internal.BlockState>;
        getMod(): string;
        static "isModeItem(net.minecraft.world.entity.player.Player,net.minecraft.world.entity.EquipmentSlot)"(player: Internal.Player_, slotType: Internal.EquipmentSlot_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        setMode<M extends Internal.IRadialMode>(stack: Internal.ItemStack_, player: Internal.Player_, radialData: Internal.RadialData_<M>, mode: M): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(stack: Internal.ItemStack_, target: Internal.LivingEntity_, attacker: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        getHUDElements(player: Internal.Player_, stack: Internal.ItemStack_): Internal.List<Internal.IHUDElement>;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_, slotChanged: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static isModeItem(stack: Internal.ItemStack_, slotType: Internal.EquipmentSlot_): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemMekaTool_ = ItemMekaTool;
    interface Char2ObjectFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<string, V> {
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        containsKey(arg0: string): boolean;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2ObjectFunction<V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<string, V>;
        remove(arg0: string): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Char2LongFunction;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2ObjectFunction<V>;
        "getOrDefault(char,java.lang.Object)"(arg0: string, arg1: V): V;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2ObjectFunction<V>;
        abstract get(arg0: string): V;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        "apply(java.lang.Character)"(arg0: string): V;
        getOrDefault(arg0: string, arg1: V): V;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2ObjectFunction<V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Char2ByteFunction;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Char2IntFunction;
        put(arg0: string, arg1: V): V;
        "put(char,java.lang.Object)"(arg0: string, arg1: V): V;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2ObjectFunction<V>;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Char2ReferenceFunction<T>;
        "containsKey(char)"(arg0: string): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        "remove(char)"(arg0: string): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Char2ShortFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        abstract "get(char)"(arg0: string): V;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: V): V;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2ObjectFunction<V>;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, V>;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Char2ObjectFunction<T>;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Char2FloatFunction;
        size(): number;
        apply(arg0: string): V;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Char2DoubleFunction;
        clear(): void;
        /**
         * @deprecated
        */
        "apply(int)"(arg0: number): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Char2CharFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Character,java.lang.Object)"(arg0: string, arg1: V): V;
    }
    type Char2ObjectFunction_<V> = Char2ObjectFunction<V>;
    interface ThreadContext$ContextStack extends Internal.Collection<string>, Internal.Serializable {
        abstract peek(): string;
        spliterator(): Internal.Spliterator<string>;
        abstract asList(): Internal.List<string>;
        forEach(arg0: Internal.Consumer_<string>): void;
        abstract getImmutableStackOrNull(): this;
        abstract isEmpty(): boolean;
        abstract pop(): string;
        abstract copy(): this;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        parallelStream(): Internal.Stream<string>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract iterator(): Internal.Iterator<string>;
        abstract contains(arg0: any): boolean;
        abstract getDepth(): number;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        stream(): Internal.Stream<string>;
        abstract toArray(): any[];
        removeIf(arg0: Internal.Predicate_<string>): boolean;
        abstract push(message: string): void;
        abstract add(arg0: string): boolean;
        abstract size(): number;
        abstract hashCode(): number;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract addAll(arg0: Internal.Collection_<string>): boolean;
        abstract clear(): void;
        abstract trim(depth: number): void;
        abstract equals(arg0: any): boolean;
        get immutableStackOrNull(): Internal.ThreadContext$ContextStack
        get empty(): boolean
        get depth(): number
    }
    type ThreadContext$ContextStack_ = ThreadContext$ContextStack;
    class PaintScreenEventJS extends Internal.PaintEventJS implements Internal.UnitVariables {
        constructor(m: Internal.Minecraft_, s: Internal.Screen_, graphics: Internal.GuiGraphics_, painter: Internal.Painter_, mx: number, my: number, d: number)
        constructor(m: Internal.Minecraft_, graphics: Internal.GuiGraphics_, painter: Internal.Painter_, d: number)
        alignY(y: number, h: number, alignY: Internal.AlignMode_): number;
        getMatrix(): Matrix4f;
        getVariables(): Internal.VariableSet;
        translate(x: number, y: number, z: number): void;
        notify(): void;
        begin(type: Internal.VertexFormat$Mode_, format: Internal.VertexFormat_): void;
        bindTextureForSetup(tex: ResourceLocation_): void;
        scale(scale: number): void;
        multiply(q: Quaternionf_): void;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        setShaderColor(r: number, g: number, b: number, a: number): void;
        vertex(m: Matrix4f_, x: number, y: number, z: number, col: number, u: number, v: number): void;
        getEntity(): Internal.Entity;
        end(): void;
        push(): void;
        wait(): void;
        vertex(m: Matrix4f_, x: number, y: number, z: number, col: number): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        rawText(text: Internal.FormattedCharSequence_, x: number, y: number, color: number, shadow: boolean): void;
        beginQuads(texture: boolean): void;
        multiplyWithMatrix(m: Matrix4f_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        getServer(): Internal.MinecraftServer;
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        blend(enabled: boolean): void;
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        wait(arg0: number, arg1: number): void;
        alignX(x: number, w: number, alignX: Internal.AlignMode_): number;
        rectangle(x: number, y: number, z: number, w: number, h: number, color: number): void;
        beginQuads(format: Internal.VertexFormat_): void;
        getLevel(): Internal.Level;
        "beginQuads(com.mojang.blaze3d.vertex.VertexFormat)"(format: Internal.VertexFormat_): void;
        text(text: net.minecraft.network.chat.Component_, x: number, y: number, color: number, shadow: boolean): void;
        pop(): void;
        translate(x: number, y: number): void;
        getPlayer(): Internal.LocalPlayer;
        scale(x: number, y: number): void;
        rectangle(x: number, y: number, z: number, w: number, h: number, color: number, u0: number, v0: number, u1: number, v1: number): void;
        scale(x: number, y: number, z: number): void;
        "beginQuads(boolean)"(texture: boolean): void;
        setShaderTexture(tex: ResourceLocation_): void;
        toString(): string;
        setPositionColorShader(): void;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        rotateDeg(angle: number): void;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        setPositionColorTextureShader(): void;
        wait(arg0: number): void;
        setShaderInstance(shader: Internal.Supplier_<Internal.ShaderInstance>): void;
        equals(arg0: any): boolean;
        rotateRad(angle: number): void;
        resetShaderColor(): void;
        get matrix(): Matrix4f
        get variables(): Internal.VariableSet
        get entity(): Internal.Entity
        get server(): Internal.MinecraftServer
        get class(): typeof any
        get level(): Internal.Level
        get player(): Internal.LocalPlayer
        set shaderTexture(tex: ResourceLocation_)
        set shaderInstance(shader: Internal.Supplier_<Internal.ShaderInstance>)
        readonly width: number;
        readonly mouseY: number;
        readonly inventory: boolean;
        readonly height: number;
        readonly painter: Internal.Painter;
        readonly mouseX: number;
    }
    type PaintScreenEventJS_ = PaintScreenEventJS;
    class EnchanterRecipe implements Internal.EnderRecipe<net.minecraft.world.Container> {
        constructor(arg0: ResourceLocation_, arg1: Internal.CountedIngredient_, arg2: Internal.Enchantment_, arg3: number)
        getClass(): typeof any;
        getCostMultiplier(): number;
        getGroup(): string;
        getEnchantmentLevel(arg0: number): number;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        getInputAmountConsumed(arg0: net.minecraft.world.Container_): number;
        getLapisForLevel(arg0: number): number;
        notify(): void;
        handler$cme000$bclib$bcl_getRemainingItems(container: net.minecraft.world.Container_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getBookForLevel(arg0: number): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        getSerializer(): Internal.RecipeSerializer<any>;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        getXPCostForLevel(arg0: number): number;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getInput(): Internal.CountedIngredient;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getXPCost(arg0: net.minecraft.world.Container_): number;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        getEnchantment(): Internal.Enchantment;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get costMultiplier(): number
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get input(): Internal.CountedIngredient
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get enchantment(): Internal.Enchantment
        get incomplete(): boolean
    }
    type EnchanterRecipe_ = EnchanterRecipe;
    class FireworkRocketItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        static setDuration(arg0: Internal.ItemStack_, arg1: number): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly TAG_EXPLOSION_COLORS: ("Colors") & (string);
        static readonly TAG_EXPLOSION_TYPE: ("Type") & (string);
        static readonly TAG_EXPLOSION_FADECOLORS: ("FadeColors") & (string);
        static readonly TAG_FLIGHT: ("Flight") & (string);
        static readonly TAG_EXPLOSION_FLICKER: ("Flicker") & (string);
        static readonly ROCKET_PLACEMENT_OFFSET: (0.15) & (number);
        static readonly TAG_EXPLOSIONS: ("Explosions") & (string);
        static readonly TAG_FIREWORKS: ("Fireworks") & (string);
        static readonly TAG_EXPLOSION_TRAIL: ("Trail") & (string);
        static readonly CRAFTABLE_DURATIONS: number[];
        static readonly TAG_EXPLOSION: ("Explosion") & (string);
    }
    type FireworkRocketItem_ = FireworkRocketItem;
    interface IntUnaryOperator {
        compose(arg0: Internal.IntUnaryOperator_): this;
        identity(): this;
        abstract applyAsInt(arg0: number): number;
        andThen(arg0: Internal.IntUnaryOperator_): this;
        (arg0: number): number;
    }
    type IntUnaryOperator_ = IntUnaryOperator | ((arg0: number)=> number);
    interface ClientboundPlayerInfoUpdatePacket$Action$Writer {
        abstract write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.ClientboundPlayerInfoUpdatePacket$Entry_): void;
        (arg0: Internal.FriendlyByteBuf, arg1: Internal.ClientboundPlayerInfoUpdatePacket$Entry): void;
    }
    type ClientboundPlayerInfoUpdatePacket$Action$Writer_ = ClientboundPlayerInfoUpdatePacket$Action$Writer | ((arg0: Internal.FriendlyByteBuf, arg1: Internal.ClientboundPlayerInfoUpdatePacket$Entry)=> void);
    interface AccessorKeyMapping {
        getAllKeyMappings(): Internal.Map<string, Internal.KeyMapping>;
        get allKeyMappings(): Internal.Map<string, Internal.KeyMapping>
    }
    type AccessorKeyMapping_ = AccessorKeyMapping;
    abstract class AbstractSimpleShaftBlock extends Internal.AbstractShaftBlock implements Internal.IWrenchableWithBracket {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.KineticBlockEntity;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getRotationAxis(arg0: Internal.BlockState_): Internal.Direction$Axis;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getBlockEntityClass(): typeof Internal.KineticBlockEntity;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        static getPreferredAxis(arg0: Internal.BlockPlaceContext_): Internal.Direction$Axis;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        withWater(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getParticleInitialRadius(): number;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.KineticBlockEntity>): void;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.KineticBlockEntity>;
        setNameKey(arg0: string): void;
        hideStressImpact(): boolean;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        static withWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): Internal.BlockState;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        removeBracket(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: boolean): Internal.Optional<Internal.ItemStack>;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        tryRemoveBracket(arg0: Internal.UseOnContext_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        updateWater(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        getParticleTargetRadius(): number;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        fluidState(arg0: Internal.BlockState_): Internal.FluidState;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        getMinimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.KineticBlockEntity>;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.KineticBlockEntity, InteractionResult>): InteractionResult;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        showCapacityWithAnnotation(): boolean;
        static stateById(arg0: number): Internal.BlockState;
        hasShaftTowards(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get blockEntityClass(): typeof Internal.KineticBlockEntity
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get particleInitialRadius(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.KineticBlockEntity>
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        get particleTargetRadius(): number
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get minimumRequiredSpeedLevel(): Internal.IRotate$SpeedLevel
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type AbstractSimpleShaftBlock_ = AbstractSimpleShaftBlock;
    interface IMenuItem {
        abstract getMenuHost(arg0: Internal.Player_, arg1: number, arg2: Internal.ItemStack_, arg3: BlockPos_): Internal.ItemMenuHost;
        (arg0: Internal.Player, arg1: number, arg2: Internal.ItemStack, arg3: BlockPos): Internal.ItemMenuHost_;
    }
    type IMenuItem_ = IMenuItem | ((arg0: Internal.Player, arg1: number, arg2: Internal.ItemStack, arg3: BlockPos)=> Internal.ItemMenuHost_);
    class SpectralBlockType extends Internal.Enum<Internal.SpectralBlockType> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        getSerializedName(): string;
        notifyAll(): void;
        "compareTo(wayoftime.bloodmagic.common.block.type.SpectralBlockType)"(arg0: Internal.SpectralBlockType_): number;
        static valueOf(arg0: string): Internal.SpectralBlockType;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        compareTo(arg0: Internal.SpectralBlockType_): number;
        static values(): Internal.SpectralBlockType[];
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.SpectralBlockType>>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.SpectralBlockType;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.SpectralBlockType
        static readonly LEAKING: (Internal.SpectralBlockType) & (Internal.SpectralBlockType);
        static readonly SOLID: (Internal.SpectralBlockType) & (Internal.SpectralBlockType);
    }
    type SpectralBlockType_ = "leaking" | SpectralBlockType | "solid";
    class Instruction {
        constructor(arg0: Internal.SequencerInstructions_)
        constructor(arg0: Internal.SequencerInstructions_, arg1: any_, arg2: number)
        constructor(arg0: Internal.SequencerInstructions_, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        static deserializeAll(arg0: Internal.ListTag_): Internal.Vector<Internal.Instruction>;
        toString(): string;
        wait(): void;
        static createDefault(): Internal.Vector<Internal.Instruction>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        static serializeAll(arg0: Internal.Vector_<Internal.Instruction>): Internal.ListTag;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type Instruction_ = Instruction;
    interface ICable {
        abstract updateConnections(): void;
        abstract canConnect(arg0: Internal.ICable_, arg1: Internal.Direction_): boolean;
        abstract destroy(): void;
        abstract reconnect(arg0: Internal.Direction_): void;
        abstract disconnect(arg0: Internal.Direction_): void;
        abstract isConnected(arg0: Internal.Direction_): boolean;
        abstract getItemStack(): Internal.ItemStack;
        get itemStack(): Internal.ItemStack
    }
    type ICable_ = ICable;
    interface Reference2ByteFunction <K> extends Internal.ToIntFunction<K>, it.unimi.dsi.fastutil.Function<K, number> {
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Reference2FloatFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Byte)"(arg0: any, arg1: number): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Reference2IntFunction<K>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Byte)"(arg0: K, arg1: number): number;
        "put(java.lang.Object,byte)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ByteFunction;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ByteFunction;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        containsKey(arg0: any): boolean;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Reference2CharFunction<K>;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        removeByte(arg0: any): number;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ByteFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ByteFunction<T>;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Reference2LongFunction<K>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ByteFunction;
        applyAsInt(arg0: K): number;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ByteFunction;
        "getOrDefault(java.lang.Object,byte)"(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        abstract getByte(arg0: any): number;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ByteFunction<T>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ByteFunction;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ByteFunction;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        (arg0: any): number;
    }
    type Reference2ByteFunction_<K> = ((arg0: any)=> number) | Reference2ByteFunction<K>;
    interface BehaviourGlass extends Internal.AddMineablePickaxe, org.betterx.bclib.behaviours.interfaces.BlockBehaviour {
    }
    type BehaviourGlass_ = BehaviourGlass;
    abstract class Panel extends Internal.Widget {
        constructor(panel: Internal.Panel_)
        getScrollStep(): number;
        static getClipboardString(): string;
        mousePressed(button: Internal.MouseButton_): boolean;
        getY(): number;
        closeGui(openPrevScreen: boolean): void;
        scrollPanel(scroll: number): boolean;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        add(widget: Internal.Widget_): void;
        isDefaultScrollVertical(): boolean;
        setPos(x: number, y: number): void;
        keyPressed(key: dev.ftb.mods.ftblibrary.ui.input.Key_): boolean;
        isGhostIngredientTarget(ingredient: any): boolean;
        getPartialTicks(): number;
        setScrollX(scroll: number): void;
        getWidth(): number;
        getDrawLayer(): Internal.Widget$DrawLayer;
        isMouseOverAnyWidget(): boolean;
        keyReleased(key: dev.ftb.mods.ftblibrary.ui.input.Key_): void;
        getMouseX(): number;
        "compareTo(dev.ftb.mods.ftblibrary.ui.Widget)"(widget: Internal.Widget_): number;
        static isShiftKeyDown(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static setClipboardString(string: string): void;
        getClass(): typeof any;
        setScrollStep(s: number): void;
        handleClick(scheme: string, path: string): boolean;
        getX(): number;
        getParent(): this;
        run(): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        getPosY(): number;
        static isMouseButtonDown(button: Internal.MouseButton_): boolean;
        setOnlyRenderWidgetsInside(value: boolean): void;
        setScrollY(scroll: number): void;
        getWidget(index: number): Internal.Widget;
        setPosAndSize(x: number, y: number, w: number, h: number): Internal.Widget;
        setWidth(v: number): void;
        getHeight(): number;
        charTyped(c: string, modifiers: Internal.KeyModifiers_): boolean;
        getContentHeight(): number;
        toString(): string;
        setSize(w: number, h: number): void;
        getCursor(): Internal.CursorType;
        isOffset(): boolean;
        notifyAll(): void;
        mouseReleased(button: Internal.MouseButton_): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        openGuiLater(): void;
        getScrollX(): number;
        getOnlyInteractWithWidgetsInside(): boolean;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        getScreen(): com.mojang.blaze3d.platform.Window;
        drawWidget(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, widget: Internal.Widget_, x: number, y: number, w: number, h: number): void;
        handleClick(click: string): boolean;
        wait(arg0: number): void;
        setHeight(v: number): void;
        addMouseOverText(list: Internal.TooltipList_): void;
        shouldDraw(): boolean;
        compareTo(widget: Internal.Widget_): number;
        notify(): void;
        compareTo(arg0: any): number;
        getWidgets(): Internal.List<Internal.Widget>;
        getPosX(): number;
        closeGui(): void;
        openGui(): void;
        getWidgetType(): Internal.WidgetType;
        abstract alignWidgets(): void;
        setX(v: number): void;
        clearWidgets(): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getScrollY(): number;
        getGui(): Internal.BaseScreen;
        tick(): void;
        wait(): void;
        refreshWidgets(): void;
        getTitle(): net.minecraft.network.chat.Component;
        openAfter(runnable: Internal.Runnable_): Internal.Runnable;
        draw(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getContentWidth(): number;
        drawBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        closeContextMenu(): void;
        mouseScrolled(scroll: number): boolean;
        getIngredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>;
        shouldAddMouseOverText(): boolean;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        setOffset(flag: boolean): void;
        movePanelScroll(dx: number, dy: number): boolean;
        setY(v: number): void;
        static isKeyDown(key: number): boolean;
        static isCtrlKeyDown(): boolean;
        abstract addWidgets(): void;
        isMouseOver(): boolean;
        playClickSound(): void;
        mouseDoubleClicked(button: Internal.MouseButton_): boolean;
        onClosed(): void;
        acceptGhostIngredient(ingredient: any): void;
        drawOffsetBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getMouseY(): number;
        hashCode(): number;
        getOnlyRenderWidgetsInside(): boolean;
        setDrawLayer(drawLayer: Internal.Widget$DrawLayer_): void;
        addAll(list: Internal.Iterable_<Internal.Widget>): void;
        align(layout: Internal.WidgetLayout_): number;
        equals(arg0: any): boolean;
        get scrollStep(): number
        get clipboardString(): string
        get y(): number
        get defaultScrollVertical(): boolean
        get partialTicks(): number
        set scrollX(scroll: number)
        get width(): number
        get drawLayer(): Internal.Widget$DrawLayer
        get mouseOverAnyWidget(): boolean
        get mouseX(): number
        get shiftKeyDown(): boolean
        set clipboardString(string: string)
        get class(): typeof any
        set scrollStep(s: number)
        get x(): number
        get parent(): Internal.Panel
        get posY(): number
        set onlyRenderWidgetsInside(value: boolean)
        set scrollY(scroll: number)
        set width(v: number)
        get height(): number
        get contentHeight(): number
        get cursor(): Internal.CursorType
        get offset(): boolean
        get scrollX(): number
        get onlyInteractWithWidgetsInside(): boolean
        get screen(): com.mojang.blaze3d.platform.Window
        set height(v: number)
        get widgets(): Internal.List<Internal.Widget>
        get posX(): number
        get widgetType(): Internal.WidgetType
        set x(v: number)
        set onlyInteractWithWidgetsInside(value: boolean)
        get scrollY(): number
        get gui(): Internal.BaseScreen
        get title(): net.minecraft.network.chat.Component
        get contentWidth(): number
        get ingredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>
        get enabled(): boolean
        set offset(flag: boolean)
        set y(v: number)
        get ctrlKeyDown(): boolean
        get mouseOver(): boolean
        get mouseY(): number
        get onlyRenderWidgetsInside(): boolean
        set drawLayer(drawLayer: Internal.Widget$DrawLayer_)
    }
    type Panel_ = Panel;
    interface ExperienceOrbAccessor {
        abstract botania_getCount(): number;
        abstract botania_setCount(arg0: number): void;
    }
    type ExperienceOrbAccessor_ = ExperienceOrbAccessor;
    interface Short2FloatFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<number, number> {
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2FloatFunction;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Short2IntFunction;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        "containsKey(short)"(arg0: number): boolean;
        "getOrDefault(short,float)"(arg0: number, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2FloatFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        abstract "get(short)"(arg0: number): number;
        "remove(short)"(arg0: number): number;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2FloatFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        containsKey(arg0: number): boolean;
        "put(short,float)"(arg0: number, arg1: number): number;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Float)"(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2FloatFunction;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Short2ShortFunction;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Short2ByteFunction;
        apply(arg0: number): number;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2FloatFunction;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Short2DoubleFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Float)"(arg0: any, arg1: number): number;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Short2CharFunction;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2FloatFunction;
        size(): number;
        put(arg0: number, arg1: number): number;
        clear(): void;
    }
    type Short2FloatFunction_ = Short2FloatFunction;
    interface Serializable {
    }
    type Serializable_ = Serializable;
    class CorundumBlock extends Internal.ZetaGlassBlock {
        constructor(arg0: string, arg1: number, arg2: Internal.ZetaModule_, arg3: Internal.MapColor_, arg4: boolean)
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getModule(): Internal.ZetaModule;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getLightEmissionZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getSettings(): Internal.BlockBehaviour$Properties;
        doesConditionApply(): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getFireSpreadSpeedZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isStickyBlockZeta(arg0: Internal.BlockState_): boolean;
        getFlammabilityZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        static isEnabled(arg0: Internal.Block_): boolean;
        static "isEnabled(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        getBlock(): Internal.Block;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static "isEnabled(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getBeaconColorMultiplierZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundTypeZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        shouldDisplayFluidOverlayZeta(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getJumpFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getEnchantPowerBonusZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        static isEnabled(arg0: Internal.Item_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        "isEnabled(net.minecraft.world.flag.FeatureFlagSet)"(arg0: Internal.FeatureFlagSet_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Block;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        isEnabled(): boolean;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        setCondition(arg0: Internal.BooleanSupplier_): Internal.ZetaBlock;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isFlammableZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get module(): Internal.ZetaModule
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        get block(): Internal.Block
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        get enabled(): boolean
        get name(): Internal.MutableComponent
        set condition(arg0: Internal.BooleanSupplier_)
        get mod(): string
        set hasCollision(arg0: boolean)
        readonly waxed: boolean;
        cluster: Internal.CorundumClusterBlock;
        readonly colorComponents: number[];
    }
    type CorundumBlock_ = CorundumBlock;
    interface ITextureAtlasSpriteLoader {
        abstract loadContents(arg0: ResourceLocation_, arg1: Internal.Resource_, arg2: Internal.FrameSize_, arg3: Internal.NativeImage_, arg4: Internal.AnimationMetadataSection_, arg5: Internal.ForgeTextureMetadata_): Internal.SpriteContents;
        abstract makeSprite(arg0: ResourceLocation_, arg1: Internal.SpriteContents_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.TextureAtlasSprite;
    }
    type ITextureAtlasSpriteLoader_ = ITextureAtlasSpriteLoader;
    class BlockNetherrackSoil extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        "randomTick(net.minecraft.world.level.block.state.BlockState,net.minecraft.server.level.ServerLevel,net.minecraft.core.BlockPos,java.util.Random)"(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.Random_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        "tick(net.minecraft.world.level.block.state.BlockState,net.minecraft.server.level.ServerLevel,net.minecraft.core.BlockPos,java.util.Random)"(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.Random_): void;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "tick(net.minecraft.world.level.block.state.BlockState,net.minecraft.server.level.ServerLevel,net.minecraft.core.BlockPos,net.minecraft.util.RandomSource)"(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.Random_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        "randomTick(net.minecraft.world.level.block.state.BlockState,net.minecraft.server.level.ServerLevel,net.minecraft.core.BlockPos,net.minecraft.util.RandomSource)"(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.Random_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static turnToDirt(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly MOISTURE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type BlockNetherrackSoil_ = BlockNetherrackSoil;
    class ChassisBlockEntity extends Internal.SmartBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        destroy(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        readClient(arg0: Internal.CompoundTag_): void;
        isVirtual(): boolean;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        remove(): void;
        load(arg0: Internal.CompoundTag_): void;
        award(arg0: Internal.CreateAdvancement_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getIncludedBlockPositions(arg0: Internal.Direction_, arg1: boolean): Internal.List<BlockPos>;
        "getUpdatePacket()"(): Internal.Packet<any>;
        packetTarget(): Internal.PacketDistributor$PacketTarget;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        writeSafe(arg0: Internal.CompoundTag_): void;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        writeClient(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        "getUpdatePacket()"(): Internal.ClientboundBlockEntityDataPacket;
        refreshBlockState(): void;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        sendToMenu(arg0: Internal.FriendlyByteBuf_): void;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        addBehaviours(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getRange(): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        getUpdatePacket(): Internal.Packet<any>;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setLazyTickRate(arg0: number): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        awardIfNear(arg0: Internal.CreateAdvancement_, arg1: number): void;
        containedChunk(): Internal.LevelChunk;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        markVirtual(): void;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        forEachBehaviour(arg0: Internal.Consumer_<Internal.BlockEntityBehaviour>): void;
        invalidate(): void;
        collectChassisGroup(): Internal.List<Internal.ChassisBlockEntity>;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        sendData(): void;
        getBehaviour<T extends Internal.BlockEntityBehaviour>(arg0: Internal.BehaviourType_<T>): T;
        getAttached(type: Internal.AttachmentType_<any>): any;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        addBehavioursDeferred(arg0: Internal.List_<Internal.BlockEntityBehaviour>): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        initialize(): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        canPlayerUse(arg0: Internal.Player_): boolean;
        tick(): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        lazyTick(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        addAttachedChasses(arg0: Internal.Queue_<BlockPos>, arg1: Internal.Set_<BlockPos>): boolean;
        saveWithId(): Internal.CompoundTag;
        notifyUpdate(): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        wait(arg0: number, arg1: number): void;
        isChunkUnloaded(): boolean;
        getLevel(): Internal.Level;
        getRequiredItems(arg0: Internal.BlockState_): Internal.ItemRequirement;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        blockHolderGetter(): Internal.HolderGetter<Internal.Block>;
        getAllBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        registerAwardables(arg0: Internal.List_<Internal.BlockEntityBehaviour>, ...arg1: Internal.CreateAdvancement_[]): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        get virtual(): boolean
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get "updatePacket()"(): Internal.Packet<any>
        get type(): Internal.BlockEntityType<any>
        get "updatePacket()"(): Internal.ClientboundBlockEntityDataPacket
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get range(): number
        get updatePacket(): Internal.Packet<any>
        set lazyTickRate(arg0: number)
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get blockState(): Internal.BlockState
        get chunkUnloaded(): boolean
        get level(): Internal.Level
        get allBehaviours(): Internal.Collection<Internal.BlockEntityBehaviour>
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get renderData(): any
        get modelData(): Internal.ModelData
        currentlySelectedRange: number;
    }
    type ChassisBlockEntity_ = ChassisBlockEntity;
    class BuilderBase {
        translationKey(key: Special.LangKey): Internal.BuilderBase<T>;
    }
    type BuilderBase_ = BuilderBase;
    interface DropTargetListener extends Internal.EventListener {
        abstract dragExit(arg0: Internal.DropTargetEvent_): void;
        abstract drop(arg0: Internal.DropTargetDropEvent_): void;
        abstract dragEnter(arg0: Internal.DropTargetDragEvent_): void;
        abstract dragOver(arg0: Internal.DropTargetDragEvent_): void;
        abstract dropActionChanged(arg0: Internal.DropTargetDragEvent_): void;
    }
    type DropTargetListener_ = DropTargetListener;
    class LootParams$Builder implements Internal.LootParamsBuilderAccess {
        constructor(arg0: Internal.ServerLevel_)
        getClass(): typeof any;
        getOptionalParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        getLevel(): Internal.ServerLevel;
        getParams(): Internal.Map<any, any>;
        toString(): string;
        notifyAll(): void;
        withOptionalParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        notify(): void;
        handler$ddi000$lootjs$addTypeOnCreate(paramSet: Internal.LootContextParamSet_, cir: Internal.CallbackInfoReturnable_<any>): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        wait(): void;
        withParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        withDynamicDrop(arg0: ResourceLocation_, arg1: Internal.LootParams$DynamicDrop_): this;
        wait(arg0: number): void;
        withLuck(arg0: number): this;
        create(arg0: Internal.LootContextParamSet_): Internal.LootParams;
        equals(arg0: any): boolean;
        get class(): typeof any
        get level(): Internal.ServerLevel
        get params(): Internal.Map<any, any>
    }
    type LootParams$Builder_ = LootParams$Builder;
    class WorldGenSirenIsland extends Feature<Internal.NoneFeatureConfiguration> implements Internal.TypedFeature {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        getId(): string;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        getFeatureType(): Internal.IafWorldData$FeatureType;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
        get id(): string
        get featureType(): Internal.IafWorldData$FeatureType
    }
    type WorldGenSirenIsland_ = WorldGenSirenIsland;
    abstract class AbstractContainerMenu {
        constructor(arg0: Internal.MenuType_<any>, arg1: number)
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        createCarriedSlotAccess(): Internal.SlotAccess;
        abstract quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        resetQuickCraft(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        broadcastFullState(): void;
        notify(): void;
        incrementStateId(): number;
        static checkContainerDataCount(arg0: Internal.ContainerData_, arg1: number): void;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        clearContainer(arg0: Internal.Player_, arg1: net.minecraft.world.Container_): void;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        doClick(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        addDataSlot(arg0: Internal.DataSlot_): Internal.DataSlot;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        sendAllDataToRemote(): void;
        setCarried(arg0: Internal.ItemStack_): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        synchronizeCarriedToRemote(): void;
        resumeRemoteUpdates(): void;
        addDataSlots(arg0: Internal.ContainerData_): void;
        static getQuickcraftHeader(arg0: number): number;
        static stillValid(arg0: Internal.ContainerLevelAccess_, arg1: Internal.Player_, arg2: Internal.Block_): boolean;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        static checkContainerSize(arg0: net.minecraft.world.Container_, arg1: number): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        abstract stillValid(arg0: Internal.Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        set carried(arg0: Internal.ItemStack_)
        get stateId(): number
        synchronizer: Internal.ContainerSynchronizer;
        static readonly QUICKCRAFT_TYPE_CLONE: (2) & (number);
        remoteCarried: Internal.ItemStack;
        readonly containerListeners: Internal.List<net.minecraft.world.inventory.ContainerListener>;
        static readonly SLOT_CLICKED_OUTSIDE: (-999) & (number);
        readonly slots: Internal.NonNullList<Internal.Slot>;
        static readonly CARRIED_SLOT_SIZE: (2147483647) & (number);
        static readonly QUICKCRAFT_TYPE_GREEDY: (1) & (number);
        remoteSlots: Internal.NonNullList<Internal.ItemStack>;
        stateId: number;
        menuType: Internal.MenuType<any>;
        static readonly QUICKCRAFT_HEADER_CONTINUE: (1) & (number);
        static readonly QUICKCRAFT_HEADER_START: (0) & (number);
        static readonly QUICKCRAFT_HEADER_END: (2) & (number);
        quickcraftStatus: number;
        suppressRemoteUpdates: boolean;
        readonly quickcraftSlots: Internal.Set<Internal.Slot>;
        carried: Internal.ItemStack;
        quickcraftType: number;
        static readonly QUICKCRAFT_TYPE_CHARITABLE: (0) & (number);
        containerId: number;
        lastSlots: Internal.NonNullList<Internal.ItemStack>;
    }
    type AbstractContainerMenu_ = AbstractContainerMenu;
    abstract class NumberConfig <T extends number> extends Internal.ConfigFromString<T> {
        constructor(mn: T, mx: T)
        getColor(v: T): Internal.Color4I;
        onClicked(clicked: Internal.Widget_, button: Internal.MouseButton_, callback: Internal.ConfigCallback_): void;
        getTooltip(): string;
        notify(): void;
        compareTo(arg0: any): number;
        "getColor(java.lang.Object)"(arg0: any): Internal.Color4I;
        "getStringForGUI(java.lang.Number)"(v: T): net.minecraft.network.chat.Component;
        getStringForGUI(): net.minecraft.network.chat.Component;
        applyValue(): void;
        getIcon(v: T): Internal.Icon;
        canScroll(): boolean;
        setCanEdit(e: boolean): Internal.ConfigValue<T>;
        "getColor(java.lang.Number)"(v: T): Internal.Color4I;
        getColor(arg0: any): Internal.Color4I;
        abstract parse(arg0: Internal.Consumer_<T>, arg1: string): boolean;
        scrollValue(currentValue: T, forward: boolean): Internal.Optional<T>;
        setValue(value: T): void;
        wait(): void;
        copy(value: T): T;
        getNameKey(): string;
        setDefaultValue(defaultValue: T): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getClass(): typeof any;
        setOrder(o: number): Internal.ConfigValue<T>;
        getStringForGUI(v: T): net.minecraft.network.chat.Component;
        addInfo(list: Internal.TooltipList_): void;
        getDefaultValue(): T;
        wait(arg0: number, arg1: number): void;
        compareTo(o: Internal.ConfigValue_<T>): number;
        getIcon(): Internal.Icon;
        setIcon(i: Internal.Icon_): Internal.ConfigValue<T>;
        getName(): string;
        getGroup(): Internal.ConfigGroup;
        getStringForGUI(arg0: any): net.minecraft.network.chat.Component;
        getColor(): Internal.Color4I;
        "getStringForGUI(java.lang.Object)"(arg0: any): net.minecraft.network.chat.Component;
        getPath(): string;
        setNameKey(key: string): Internal.ConfigValue<T>;
        toString(): string;
        notifyAll(): void;
        init(group: Internal.ConfigGroup_, id: string, value: T, setter: Internal.Consumer_<T>, defaultValue: T): Internal.ConfigValue<T>;
        static info(key: string, value: any): net.minecraft.network.chat.Component;
        "compareTo(dev.ftb.mods.ftblibrary.config.ConfigValue)"(o: Internal.ConfigValue_<T>): number;
        getStringFromValue(v: T): string;
        withScrollIncrement(increment: T): this;
        hashCode(): number;
        getValue(): T;
        isEqual(v1: T, v2: T): boolean;
        wait(arg0: number): void;
        getCanEdit(): boolean;
        fader(v: boolean): this;
        setCurrentValue(v: T): boolean;
        equals(arg0: any): boolean;
        get tooltip(): string
        get stringForGUI(): net.minecraft.network.chat.Component
        set canEdit(e: boolean)
        set value(value: T)
        get nameKey(): string
        set defaultValue(defaultValue: T)
        get class(): typeof any
        set order(o: number)
        get defaultValue(): T
        get icon(): Internal.Icon
        set icon(i: Internal.Icon_)
        get name(): string
        get group(): Internal.ConfigGroup
        get color(): Internal.Color4I
        get path(): string
        set nameKey(key: string)
        get value(): T
        get canEdit(): boolean
        set currentValue(v: T)
        static readonly COLOR: (Internal.Color4I) & (Internal.Color4I);
        readonly min: T;
        readonly max: T;
        fader: boolean;
    }
    type NumberConfig_<T extends number> = NumberConfig<T>;
    class Behavior$Status extends Internal.Enum<Internal.Behavior$Status> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.Behavior$Status[];
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.Behavior$Status;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Behavior$Status>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.Behavior$Status;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.Behavior$Status_): number;
        wait(arg0: number): void;
        "compareTo(net.minecraft.world.entity.ai.behavior.Behavior$Status)"(arg0: Internal.Behavior$Status_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.Behavior$Status
        static readonly RUNNING: (Internal.Behavior$Status) & (Internal.Behavior$Status);
        static readonly STOPPED: (Internal.Behavior$Status) & (Internal.Behavior$Status);
    }
    type Behavior$Status_ = "stopped" | Behavior$Status | "running";
    class SmartChuteBlock extends Internal.AbstractChuteBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getBlockEntityClass(): typeof Internal.ChuteBlockEntity;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        static isOpenChute(arg0: Internal.BlockState_): boolean;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        static isTransparentChute(arg0: Internal.BlockState_): boolean;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getBlockEntityType(): Internal.BlockEntityType<Internal.ChuteBlockEntity>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        updateChuteState(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.BlockGetter_, arg3: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        isTransparent(arg0: Internal.BlockState_): boolean;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.ChuteBlockEntity;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.ChuteBlockEntity, InteractionResult>): InteractionResult;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        static getChuteFacing(arg0: Internal.BlockState_): Internal.Direction;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.ChuteBlockEntity>;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        getFacing(arg0: Internal.BlockState_): Internal.Direction;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static isChute(arg0: Internal.BlockState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.ChuteBlockEntity>): void;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        isOpen(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get blockEntityClass(): typeof Internal.ChuteBlockEntity
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityType(): Internal.BlockEntityType<Internal.ChuteBlockEntity>
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type SmartChuteBlock_ = SmartChuteBlock;
    interface Supplier <T> {
        abstract get(): T;
        (): T;
    }
    type Supplier_<T> = Supplier<T> | (()=> T);
    class CrushedCopperPileBlock extends Internal.FallingBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        static isFree(arg0: Internal.BlockState_): boolean;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        getFallDamageSource(arg0: Internal.Entity_): Internal.DamageSource;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        falling(arg0: Internal.FallingBlockEntity_): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        getDustColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        getDelayAfterPlace(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get delayAfterPlace(): number
        set hasCollision(arg0: boolean)
    }
    type CrushedCopperPileBlock_ = CrushedCopperPileBlock;
    class ScrollController {
        constructor(listener: Internal.ScrollController$IListener_)
        getClass(): typeof any;
        toString(): string;
        scrollBy(delta: number, duration: number): void;
        isScrolling(): boolean;
        notifyAll(): void;
        scrollTo(target: number, duration: number): void;
        scrollBy(delta: number): boolean;
        getCurrValue(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        update(time: number): void;
        hashCode(): number;
        scrollTo(target: number): boolean;
        wait(): void;
        setStartValue(start: number): void;
        wait(arg0: number): void;
        setMaxScroll(max: number): void;
        abortAnimation(): void;
        equals(arg0: any): boolean;
        getDuration(): number;
        get class(): typeof any
        get scrolling(): boolean
        get currValue(): number
        set startValue(start: number)
        set maxScroll(max: number)
        get duration(): number
    }
    type ScrollController_ = ScrollController;
    class SourceAcceptorBlockEntity extends Internal.AENetworkBlockEntity implements Internal.IExternalPowerSink {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        injectAEPower(arg0: number, arg1: Internal.Actionable_): number;
        requestModelDataUpdate(): void;
        disassembleWithWrench(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.BlockHitResult_, arg3: Internal.ItemStack_): InteractionResult;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        exportSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        setName(arg0: string): void;
        getMainNode(): Internal.IManagedGridNode;
        saveWithoutMetadata(): Internal.CompoundTag;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getGridNode(arg0: Internal.Direction_): Internal.IGridNode;
        getPowerFlow(): Internal.AccessRestriction;
        isClientSide(): boolean;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getSubInventory(arg0: ResourceLocation_): Internal.InternalInventory;
        getType(): Internal.BlockEntityType<any>;
        getActionableNode(): Internal.IGridNode;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        setOwner(arg0: Internal.Player_): void;
        addAdditionalDrops(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.List_<Internal.ItemStack>): void;
        getRenderBoundingBox(): Internal.AABB;
        getCustomName(): net.minecraft.network.chat.Component;
        getAEMaxPower(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        ifGridPresent(arg0: Internal.Consumer_<Internal.IGrid>): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        injectExternalPower(arg0: Internal.PowerUnits_, arg1: number, arg2: Internal.Actionable_): number;
        markForUpdate(): void;
        getTop(): Internal.Direction;
        loadTag(arg0: Internal.CompoundTag_): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getGlobalPos(): Internal.GlobalPos;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        importSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        getReadyInvoked(): number;
        getCableConnectionType(arg0: Internal.Direction_): Internal.AECableType;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        getExternalPowerDemand(arg0: Internal.PowerUnits_, arg1: number): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        onReady(): void;
        getGridConnectableSides(arg0: Internal.BlockOrientation_): Internal.Set<Internal.Direction>;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        static registerBlockEntityItem(arg0: Internal.BlockEntityType_<any>, arg1: Internal.Item_): void;
        clearContent(): void;
        reviveCaps(): void;
        static tryClear(arg0: any): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        getUpdateTag(): Internal.CompoundTag;
        getRenderAttachmentData(): any;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getAECurrentPower(): number;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        onMainNodeStateChanged(arg0: Internal.IGridNodeListener$State_): void;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getGridNode(): Internal.IGridNode;
        invalidateCaps(): void;
        notLoaded(): boolean;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getBlockEntity(): Internal.BlockEntity;
        getPriority(): number;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract saveChanges(): void;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        getOrientation(): Internal.BlockOrientation;
        serializeNBT(): Internal.Tag;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        isAEPublicPowerStorage(): boolean;
        extractAEPower(arg0: number, arg1: Internal.Actionable_, arg2: Internal.PowerMultiplier_): number;
        getQueuedForReady(): number;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getFront(): Internal.Direction;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getRenderData(): any;
        equals(arg0: any): boolean;
        set blockState(arg0: Internal.BlockState_)
        set name(arg0: string)
        get mainNode(): Internal.IManagedGridNode
        get powerFlow(): Internal.AccessRestriction
        get clientSide(): boolean
        get type(): Internal.BlockEntityType<any>
        get actionableNode(): Internal.IGridNode
        set owner(arg0: Internal.Player_)
        get renderBoundingBox(): Internal.AABB
        get customName(): net.minecraft.network.chat.Component
        get AEMaxPower(): number
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get top(): Internal.Direction
        get globalPos(): Internal.GlobalPos
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get readyInvoked(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        get AECurrentPower(): number
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get gridNode(): Internal.IGridNode
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get blockEntity(): Internal.BlockEntity
        get priority(): number
        get level(): Internal.Level
        get orientation(): Internal.BlockOrientation
        get AEPublicPowerStorage(): boolean
        get queuedForReady(): number
        get front(): Internal.Direction
        get modelData(): Internal.ModelData
        get renderData(): any
    }
    type SourceAcceptorBlockEntity_ = SourceAcceptorBlockEntity;
    interface IForgeFluidState {
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canExtinguish(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        canHydrate(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_): boolean;
        move(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): boolean;
        shouldUpdateWhileBoating(arg0: Internal.Boat_, arg1: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        canConvertToSource(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: boolean): Internal.BlockPathTypes;
        getFluidType(): Internal.FluidType;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        get fluidType(): Internal.FluidType
    }
    type IForgeFluidState_ = IForgeFluidState;
    class BlockProxy extends Internal.BlockWithEntityGuiCabled {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getOpenStat(): Internal.Stat<ResourceLocation>;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        writeExtraGuiData(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: BlockPos_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        isPersistNbt(): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        static onBlockActivatedHook(arg0: Internal.IBlockGui_, arg1: Internal.IBlockGui$IBlockContainerProvider_, arg2: Internal.BlockState_, arg3: Internal.Level_, arg4: BlockPos_, arg5: Internal.Player_, arg6: Internal.InteractionHand_, arg7: Internal.BlockHitResult_): InteractionResult;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get openStat(): Internal.Stat<ResourceLocation>
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get persistNbt(): boolean
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly NBT_ID: ("proxyId") & (string);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type BlockProxy_ = BlockProxy;
    class LC implements Internal.Copyable<Internal.LC> {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        computeO(arg0: codechicken.lib.vec.Vector3_, arg1: number): this;
        compute(arg0: codechicken.lib.vec.Vector3_, arg1: number): this;
        notify(): void;
        "compute(codechicken.lib.vec.Vector3,codechicken.lib.vec.Vector3)"(arg0: codechicken.lib.vec.Vector3_, arg1: codechicken.lib.vec.Vector3_): this;
        wait(arg0: number, arg1: number): void;
        copy(): any;
        set(arg0: Internal.LC_): this;
        "compute(codechicken.lib.vec.Vector3,int)"(arg0: codechicken.lib.vec.Vector3_, arg1: number): this;
        hashCode(): number;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): this;
        compute(arg0: codechicken.lib.vec.Vector3_, arg1: codechicken.lib.vec.Vector3_): this;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        fa: number;
        fb: number;
        fc: number;
        side: number;
        fd: number;
    }
    type LC_ = LC;
    class ItemCoFH extends Internal.Item implements Internal.ICoFHItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        setModId(arg0: string): Internal.ICoFHItem;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        addModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        "setBurnTime(int)"(arg0: number): this;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isActive(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        addIncrementModeChangeTooltip(arg0: Internal.IMultiModeItem_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: Internal.List_<net.minecraft.network.chat.Component>, arg4: Internal.TooltipFlag_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        "setActive(net.minecraft.world.item.ItemStack,boolean)"(arg0: Internal.ItemStack_, arg1: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        addEnergyTooltip(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_, arg4: number, arg5: number, arg6: boolean): void;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        setActive(arg0: Internal.ItemStack_, arg1: boolean): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        "setActive(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        hasActiveTag(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        "setBurnTime(int)"(i: number): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        setEnchantability(arg0: number): this;
        wait(arg0: number, arg1: number): void;
        setActive(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setBurnTime(arg0: number): this;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        set modId(arg0: string)
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set "burnTime(int)"(arg0: number)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "burnTime(int)"(i: number)
        get eatingSound(): Internal.SoundEvent
        set enchantability(arg0: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set burnTime(arg0: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type ItemCoFH_ = ItemCoFH;
    abstract class UpgradeWrapperBase <W extends Internal.IUpgradeWrapper, T extends Internal.UpgradeItemBase<W>> implements Internal.IUpgradeWrapper {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getUpgradeStack(): Internal.ItemStack;
        setEnabled(arg0: boolean): void;
        isInCooldown(arg0: Internal.Level_): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getCooldownTime(): number;
        canBeDisabled(): boolean;
        hashCode(): number;
        hideSettingsTab(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        get upgradeStack(): Internal.ItemStack
        set enabled(arg0: boolean)
        get enabled(): boolean
        get cooldownTime(): number
    }
    type UpgradeWrapperBase_<W extends Internal.IUpgradeWrapper, T extends Internal.UpgradeItemBase<W>> = UpgradeWrapperBase<W, T>;
    class RingBufferAdmin implements Internal.RingBufferAdminMBean {
        getClass(): typeof any;
        hashCode(): number;
        abstract getBufferSize(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        abstract getRemainingCapacity(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get bufferSize(): number
        get remainingCapacity(): number
    }
    type RingBufferAdmin_ = RingBufferAdmin;
    class FillInBubblesWithWaterFeature extends Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type FillInBubblesWithWaterFeature_ = FillInBubblesWithWaterFeature;
    class ScreenEvent$Init$Post extends Internal.ScreenEvent$Init {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: Internal.List_<Internal.GuiEventListener>, arg2: Internal.Consumer_<Internal.GuiEventListener>, arg3: Internal.Consumer_<Internal.GuiEventListener>)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        getListenersList(): Internal.List<Internal.GuiEventListener>;
        isCancelable(): boolean;
        removeListener(arg0: Internal.GuiEventListener_): void;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        addListener(arg0: Internal.GuiEventListener_): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get screen(): Internal.Screen
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get listenersList(): Internal.List<Internal.GuiEventListener>
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent$Init$Post_ = ScreenEvent$Init$Post;
    class ThinArchFeature extends Feature<Internal.ThinArchFeatureConfig> {
        constructor()
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.ThinArchFeatureConfig_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.ThinArchFeatureConfig, Feature<Internal.ThinArchFeatureConfig>>>;
        wait(arg0: number): void;
        place(featurePlaceContext: Internal.FeaturePlaceContext_<Internal.ThinArchFeatureConfig>): boolean;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type ThinArchFeature_ = ThinArchFeature;
    class MaterialChecklist {
        constructor()
        getClass(): typeof any;
        toString(): string;
        warnBlockNotLoaded(): void;
        notifyAll(): void;
        createWrittenClipboard(): Internal.ItemStack;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        require(arg0: Internal.ItemRequirement_): void;
        wait(): void;
        wait(arg0: number): void;
        createWrittenBook(): Internal.ItemStack;
        collect(arg0: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getRequiredAmount(arg0: Internal.Item_): number;
        get class(): typeof any
        damageRequired: Internal.Object2IntMap<Internal.Item>;
        blocksNotLoaded: boolean;
        static readonly MAX_ENTRIES_PER_PAGE: (5) & (number);
        static readonly MAX_ENTRIES_PER_CLIPBOARD_PAGE: (7) & (number);
        required: Internal.Object2IntMap<Internal.Item>;
        gathered: Internal.Object2IntMap<Internal.Item>;
    }
    type MaterialChecklist_ = MaterialChecklist;
    class BaseContainerType <T extends Internal.BaseContainer> extends Internal.MenuType<T> {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static create<T extends Internal.BaseContainer>(containerSerializer: Internal.BiConsumer_<T, Internal.FriendlyByteBuf>, containerDeserializer: Internal.BiFunction_<Internal.Player, Internal.FriendlyByteBuf, T>): Internal.BaseContainerType<T>;
        notify(): void;
        writeContainer(container: T, buffer: Internal.FriendlyByteBuf_): void;
        wait(arg0: number, arg1: number): void;
        create(arg0: number, arg1: Internal.Inventory_): T;
        static create<T extends Internal.AbstractContainerMenu>(arg0: Internal.IContainerFactory_<T>): Internal.MenuType<T>;
        static "create(java.util.function.BiConsumer,java.util.function.BiFunction)"<T extends Internal.BaseContainer>(containerSerializer: Internal.BiConsumer_<T, Internal.FriendlyByteBuf>, containerDeserializer: Internal.BiFunction_<Internal.Player, Internal.FriendlyByteBuf, T>): Internal.BaseContainerType<T>;
        create(arg0: number, arg1: Internal.Inventory_, arg2: Internal.FriendlyByteBuf_): any;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "create(int,net.minecraft.world.entity.player.Inventory)"(arg0: number, arg1: Internal.Inventory_): T;
        get class(): typeof any
    }
    type BaseContainerType_<T extends Internal.BaseContainer> = BaseContainerType<T>;
    class PermissionType <T> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        typeToken(): T;
        typeName(): string;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type PermissionType_<T> = PermissionType<T>;
    class BurnableFluid extends Internal.ForgeFlowingFluid {
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        notify(): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getSlopeDistance(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: number, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_, arg6: Internal.Short2ObjectMap_<Internal.Pair<Internal.BlockState, Internal.FluidState>>, arg7: Internal.Short2BooleanMap_): number;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        abstract beforeDestroyingBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getSpread(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.Map<Internal.Direction, Internal.FluidState>;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        /**
         * @deprecated
        */
        abstract canConvertToSource(arg0: Internal.Level_): boolean;
        isRandomlyTicking(): boolean;
        getDripParticle(): Internal.ParticleOptions;
        getSource(arg0: boolean): Internal.FluidState;
        abstract getSlopeFindDistance(arg0: Internal.LevelReader_): number;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        abstract getExplosionResistance(): number;
        getBucket(): Internal.Item;
        isSame(arg0: Internal.Fluid_): boolean;
        animateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        isSolidFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getNewLiquid(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.FluidState;
        spreadTo(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.FluidState_): void;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        getClass(): typeof any;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        handler$dha000$fabric_transfer_api_v1$hookGetBucketFillSound(cir: Internal.CallbackInfoReturnable_<any>): void;
        abstract canBeReplacedWith(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Fluid_, arg4: Internal.Direction_): boolean;
        fabric_getCachedFluidVariant(): Internal.FluidVariant;
        isEmpty(): boolean;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        getTickDelay(arg0: Internal.LevelReader_): number;
        getSpreadDelay(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.FluidState_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$registryName(): ResourceLocation;
        registerDefaultState(arg0: Internal.FluidState_): void;
        handler$dmd000$alexscaves$ac_canHoldFluid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_, arg4: Internal.CallbackInfoReturnable_<any>): void;
        handler$dmd000$alexscaves$ac_spreadTo(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: Internal.FluidState_, arg5: Internal.CallbackInfo_): void;
        getAmount(arg0: Internal.FluidState_): number;
        toString(): string;
        getFlowing(): Internal.Fluid;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        handler$fbf000$create$canPassThroughOnWaterWheel(arg0: Internal.BlockGetter_, arg1: Internal.Fluid_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.Direction_, arg5: BlockPos_, arg6: Internal.BlockState_, arg7: Internal.FluidState_, arg8: Internal.CallbackInfoReturnable_<any>): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        hashCode(): number;
        randomTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.RandomSource_): void;
        abstract getDropOff(arg0: Internal.LevelReader_): number;
        createFluidStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Fluid, Internal.FluidState>): void;
        abstract createLegacyBlock(arg0: Internal.FluidState_): Internal.BlockState;
        wait(arg0: number): void;
        getSource(): Internal.Fluid;
        static getLegacyLevel(arg0: Internal.FluidState_): number;
        equals(arg0: any): boolean;
        spread(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        canSpreadTo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: BlockPos_, arg5: Internal.BlockState_, arg6: Internal.FluidState_, arg7: Internal.Fluid_): boolean;
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get randomlyTicking(): boolean
        get dripParticle(): Internal.ParticleOptions
        get explosionResistance(): number
        get bucket(): Internal.Item
        get class(): typeof any
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get flowing(): Internal.Fluid
        get source(): Internal.Fluid
    }
    type BurnableFluid_ = BurnableFluid;
    class SparkTinkererBlock extends Internal.BotaniaWaterloggedBlock implements Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type SparkTinkererBlock_ = SparkTinkererBlock;
    interface IDrawerAttributesModifiable extends Internal.IDrawerAttributes {
        setItemLocked(arg0: Internal.LockAttribute_, arg1: boolean): boolean;
        setIsDictConvertible(arg0: boolean): boolean;
        hasFillLevel(): boolean;
        setIsSealed(arg0: boolean): boolean;
        isUnlimitedStorage(): boolean;
        isDictConvertible(): boolean;
        isShowingQuantity(): boolean;
        setIsUnlimitedVending(arg0: boolean): boolean;
        setIsShowingQuantity(arg0: boolean): boolean;
        isVoid(): boolean;
        canItemLock(arg0: Internal.LockAttribute_): boolean;
        setIsVoid(arg0: boolean): boolean;
        setIsUnlimitedStorage(arg0: boolean): boolean;
        isUnlimitedVending(): boolean;
        setIsConcealed(arg0: boolean): boolean;
        setHasFillLevel(arg0: boolean): boolean;
        isConcealed(): boolean;
        isSealed(): boolean;
        isItemLocked(arg0: Internal.LockAttribute_): boolean;
        set isDictConvertible(arg0: boolean)
        set isSealed(arg0: boolean)
        get unlimitedStorage(): boolean
        get dictConvertible(): boolean
        get showingQuantity(): boolean
        set isUnlimitedVending(arg0: boolean)
        set isShowingQuantity(arg0: boolean)
        get "void"(): boolean
        set isVoid(arg0: boolean)
        set isUnlimitedStorage(arg0: boolean)
        get unlimitedVending(): boolean
        set isConcealed(arg0: boolean)
        set hasFillLevel(arg0: boolean)
        get concealed(): boolean
        get sealed(): boolean
    }
    type IDrawerAttributesModifiable_ = IDrawerAttributesModifiable;
    class BlockComponent extends Internal.Record implements Internal.RecipeComponent<Internal.Block> {
        constructor(crole: Internal.ComponentRole_)
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: Internal.JsonObject_): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.Block, O>;
        notify(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.Block>;
        key(name: string): Internal.RecipeKey<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        checkEmpty(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, map: Internal.Map_<any, any>): void;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: Internal.JsonObject_): void;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        crole(): Internal.ComponentRole;
        checkValueHasChanged(oldValue: Internal.Block_, newValue: Internal.Block_): boolean;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.Block>>;
        write(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,net.minecraft.world.level.block.Block)"(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        wait(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.Block;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        asArray(): Internal.ArrayRecipeComponent<Internal.Block>;
        getClass(): typeof any;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.Block>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.Block;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block)"(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<Internal.Block>;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.Block>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hashCode(): number;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.Block, O>;
        wait(arg0: number): void;
        equals(o: any): boolean;
        get class(): typeof any
        static readonly OUTPUT: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
        static readonly INPUT: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
        static readonly BLOCK: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
    }
    type BlockComponent_ = BlockComponent;
    interface IntSet extends Internal.Set<number>, Internal.IntCollection {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract "contains(int)"(arg0: number): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        of(arg0: number, arg1: number): this;
        of(): this;
        abstract contains(arg0: number): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        abstract "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intParallelStream(): Internal.IntStream;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract "remove(int)"(arg0: number): boolean;
        abstract removeAll(arg0: Internal.IntCollection_): boolean;
        abstract "removeAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        spliterator(): Internal.IntSpliterator;
        abstract "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intIterator(): Internal.IntIterator;
        abstract "add(int)"(arg0: number): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        abstract remove(arg0: number): boolean;
        abstract addAll(arg0: Internal.IntCollection_): boolean;
        abstract retainAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        abstract add(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(int[])"(arg0: number[]): number[];
        abstract containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        "of(int,int,int)"(arg0: number, arg1: number, arg2: number): this;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        of(arg0: number): this;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        of<E>(arg0: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        "of(int)"(arg0: number): this;
        "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        "of(int,int)"(arg0: number, arg1: number): this;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        abstract "retainAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        abstract toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract toArray(arg0: number[]): number[];
        "of(int[])"(...arg0: number[]): this;
        of(arg0: number, arg1: number, arg2: number): this;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract "addAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(it.unimi.dsi.fastutil.ints.IntPredicate)"(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(java.util.function.IntPredicate)"(arg0: Internal.IntPredicate_): boolean;
        "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        of(...arg0: number[]): this;
        abstract size(): number;
        abstract hashCode(): number;
        abstract "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        of<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        abstract clear(): void;
        abstract "containsAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        abstract equals(arg0: any): boolean;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get empty(): boolean
    }
    type IntSet_ = IntSet;
    abstract class Config$Serializer <T extends com.almostreliable.unified.config.Config> {
        constructor()
        abstract deserialize(arg0: Internal.JsonObject_): T;
        getClass(): typeof any;
        toString(): string;
        isInvalid(): boolean;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        abstract serialize(arg0: T): Internal.JsonObject;
        wait(arg0: number): void;
        safeGet<V>(supplier: Internal.Supplier_<V>, defaultValue: V): V;
        equals(arg0: any): boolean;
        get class(): typeof any
        get invalid(): boolean
    }
    type Config$Serializer_<T extends com.almostreliable.unified.config.Config> = Config$Serializer<T>;
    class VariantFurnaceBlock extends Internal.FurnaceBlock implements Internal.IZetaBlockExtensions, Internal.IForgeBlock, Internal.IZetaBlock {
        constructor(arg0: string, arg1: Internal.ZetaModule_, arg2: Internal.BlockBehaviour$Properties_)
        isScaffoldingZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getModule(): Internal.ZetaModule;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getLightEmissionZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getSettings(): Internal.BlockBehaviour$Properties;
        doesConditionApply(): boolean;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        isLadderZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static createFurnaceTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockEntityType_<T>, arg2: Internal.BlockEntityType_<Internal.AbstractFurnaceBlockEntity>): Internal.BlockEntityTicker<T>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        canStickToZeta(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        getFireSpreadSpeedZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isStickyBlockZeta(arg0: Internal.BlockState_): boolean;
        getFlammabilityZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        static isEnabled(arg0: Internal.Block_): boolean;
        static "isEnabled(net.minecraft.world.level.block.Block)"(arg0: Internal.Block_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        getBlock(): Internal.Block;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        openContainer(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_): void;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static "isEnabled(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>, arg1: Internal.ItemLike_, arg2: boolean): Internal.Block;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getBeaconColorMultiplierZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundTypeZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        shouldDisplayFluidOverlayZeta(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getJumpFactor(): number;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getEnchantPowerBonusZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        collisionExtendsVerticallyZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        getToolModifiedStateZeta(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: string, arg3: boolean): Internal.BlockState;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        canSustainPlantZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: string): boolean;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        static isEnabled(arg0: Internal.Item_): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        "isEnabled(net.minecraft.world.flag.FeatureFlagSet)"(arg0: Internal.FeatureFlagSet_): boolean;
        setCreativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>): Internal.Block;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        isConduitFrameZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        setCondition(arg0: Internal.BooleanSupplier_): Internal.IZetaBlock;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        makesOpenTrapdoorAboveClimbableZeta(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        isFlammableZeta(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get module(): Internal.ZetaModule
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        get block(): Internal.Block
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set creativeTab(arg0: Internal.ResourceKey_<Internal.CreativeModeTab>)
        set destroySpeed(v: number)
        set condition(arg0: Internal.BooleanSupplier_)
        get enabled(): boolean
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type VariantFurnaceBlock_ = VariantFurnaceBlock;
    class MutableInt extends number implements Internal.Mutable<number>, Internal.Comparable<Internal.MutableInt> {
        constructor()
        constructor(arg0: number)
        constructor(arg0: number)
        constructor(arg0: string)
        decrementAndGet(): number;
        "getAndAdd(int)"(arg0: number): number;
        doubleValue(): number;
        getAndAdd(arg0: number): number;
        increment(): void;
        compareTo(arg0: Internal.MutableInt_): number;
        add(arg0: number): void;
        notify(): void;
        "setValue(java.lang.Object)"(arg0: any): void;
        compareTo(arg0: any): number;
        "add(int)"(arg0: number): void;
        setValue(arg0: any): void;
        subtract(arg0: number): void;
        getAndDecrement(): number;
        longValue(): number;
        "addAndGet(java.lang.Number)"(arg0: number): number;
        toInteger(): number;
        incrementAndGet(): number;
        "subtract(java.lang.Number)"(arg0: number): void;
        getValue(): any;
        shortValue(): number;
        getAndIncrement(): number;
        wait(): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        addAndGet(arg0: number): number;
        setValue(arg0: number): void;
        getClass(): typeof any;
        floatValue(): number;
        add(arg0: number): void;
        "setValue(int)"(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        addAndGet(arg0: number): number;
        getAndAdd(arg0: number): number;
        intValue(): number;
        decrement(): void;
        "getAndAdd(java.lang.Number)"(arg0: number): number;
        toString(): string;
        "subtract(int)"(arg0: number): void;
        notifyAll(): void;
        "add(java.lang.Number)"(arg0: number): void;
        subtract(arg0: number): void;
        "setValue(java.lang.Number)"(arg0: number): void;
        "compareTo(org.apache.commons.lang3.mutable.MutableInt)"(arg0: Internal.MutableInt_): number;
        hashCode(): number;
        "addAndGet(int)"(arg0: number): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setValue(arg0: number): void;
        byteValue(): number;
        set "value(java.lang.Object)"(arg0: any)
        set value(arg0: any)
        get andDecrement(): number
        get value(): any
        get andIncrement(): number
        set value(arg0: number)
        get class(): typeof any
        set "value(int)"(arg0: number)
        set "value(java.lang.Number)"(arg0: number)
        set value(arg0: number)
    }
    type MutableInt_ = MutableInt;
    class BakedGlyph {
        constructor(arg0: any_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        getClass(): typeof any;
        renderType(arg0: Internal.Font$DisplayMode_): Internal.RenderType;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        handler$bco000$oculus$render(italic: boolean, x: number, y: number, matrix: Matrix4f_, vertexConsumer: Internal.VertexConsumer_, red: number, green: number, blue: number, alpha: number, light: number, ci: Internal.CallbackInfo_): void;
        hashCode(): number;
        wait(): void;
        renderEffect(arg0: Internal.BakedGlyph$Effect_, arg1: Matrix4f_, arg2: Internal.VertexConsumer_, arg3: number): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        render(arg0: boolean, arg1: number, arg2: number, arg3: Matrix4f_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        get class(): typeof any
    }
    type BakedGlyph_ = BakedGlyph;
    interface VertexBufferHelper {
        abstract restoreBinding(): void;
        abstract saveBinding(): void;
    }
    type VertexBufferHelper_ = VertexBufferHelper;
    class ChemicalHandlerManager$GasHandlerManager extends Internal.ChemicalHandlerManager<Internal.Gas, Internal.GasStack, Internal.IGasTank, Internal.IGasHandler, Internal.IGasHandler$ISidedGasHandler> {
        constructor(holder: Internal.IChemicalTankHolder_<Internal.Gas, Internal.GasStack, Internal.IGasTank>, baseHandler: Internal.IGasHandler$ISidedGasHandler_)
        getContainers(side: Internal.Direction_): Internal.List<Internal.IGasTank>;
        getClass(): typeof any;
        toString(): string;
        invalidateAll(): void;
        notifyAll(): void;
        resolve<T>(capability: Internal.Capability_<T>, side: Internal.Direction_): Internal.LazyOptional<T>;
        notify(): void;
        getSupportedCapabilities(): Internal.List<Internal.Capability<any>>;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getInternal(): Internal.IGasHandler$ISidedGasHandler;
        wait(): void;
        invalidate(capability: Internal.Capability_<any>, side: Internal.Direction_): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        canHandle(): boolean;
        get class(): typeof any
        get supportedCapabilities(): Internal.List<Internal.Capability<any>>
        get internal(): Internal.IGasHandler$ISidedGasHandler
    }
    type ChemicalHandlerManager$GasHandlerManager_ = ChemicalHandlerManager$GasHandlerManager;
    class IntTag extends Internal.NumericTag {
        constructor(arg0: number)
        getClass(): typeof any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsLong(): number;
        getAsFloat(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        write(arg0: Internal.DataOutput_): void;
        getId(): number;
        toString(): string;
        notifyAll(): void;
        specialEquals(o: any, shallow: boolean): boolean;
        static valueOf(arg0: number): Internal.IntTag;
        getAsDouble(): number;
        getType(): Internal.TagType<Internal.IntTag>;
        accept(arg0: Internal.TagVisitor_): void;
        hashCode(): number;
        getAsInt(): number;
        getAsString(): string;
        getAsByte(): number;
        getAsNumber(): number;
        copy(): Internal.Tag;
        wait(): void;
        wait(arg0: number): void;
        getAsShort(): number;
        equals(arg0: any): boolean;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        get class(): typeof any
        get asLong(): number
        get asFloat(): number
        get id(): number
        get asDouble(): number
        get type(): Internal.TagType<Internal.IntTag>
        get asInt(): number
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get asShort(): number
        static readonly TYPE: Internal.TagType<Internal.IntTag>;
    }
    type IntTag_ = IntTag;
    interface GenerationProperties {
        abstract getFeatures(arg0: Internal.GenerationStep$Decoration_): Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>;
        abstract getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.Iterable<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
        abstract getFeatures(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>;
        get features(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>
    }
    type GenerationProperties_ = GenerationProperties;
    abstract class AbstractLong2ObjectMap <V> extends Internal.AbstractLong2ObjectFunction<V> implements Internal.Serializable, Internal.Long2ObjectMap<V> {
        "replace(java.lang.Long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        "computeIfPresent(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "merge(long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        containsValue(arg0: any): boolean;
        remove(arg0: number): V;
        "apply(java.lang.Long)"(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        "computeIfAbsent(long,it.unimi.dsi.fastutil.longs.Long2ObjectFunction)"(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Long2ObjectFunction<T>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Long2LongFunction;
        "computeIfAbsent(java.lang.Long,java.util.function.Function)"(arg0: number, arg1: Internal.Function_<number, V>): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        "computeIfPresent(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Long2FloatFunction;
        composeLong(arg0: Internal.Long2LongFunction_): Internal.Long2ObjectFunction<V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Long2ShortFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        abstract "get(long)"(arg0: number): V;
        "replace(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        abstract defaultReturnValue(): V;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        getClass(): typeof any;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "getOrDefault(long,java.lang.Object)"(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ObjectFunction<V>;
        static of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        "compute(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Long2ByteFunction;
        put(arg0: number, arg1: V): V;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ObjectFunction<V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        "remove(long)"(arg0: number): V;
        toString(): string;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        "merge(java.lang.Long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        "computeIfAbsent(long,java.util.function.LongFunction)"(arg0: number, arg1: Internal.LongFunction_<V>): V;
        abstract size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        "remove(long,java.lang.Object)"(arg0: number, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ObjectFunction<V>;
        wait(arg0: number): void;
        replace(arg0: number, arg1: V): V;
        abstract long2ObjectEntrySet(): Internal.ObjectSet<Internal.Long2ObjectMap$Entry<V>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        replace(arg0: number, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        "putIfAbsent(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        "replace(long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ObjectFunction<V>;
        notify(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "apply(long)"(arg0: number): V;
        keySet(): Internal.Set<any>;
        "putIfAbsent(long,java.lang.Object)"(arg0: number, arg1: V): V;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Long2IntFunction;
        "compute(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.LongFunction_<V>): V;
        /**
         * @deprecated
        */
        "put(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        entrySet(): Internal.Set<any>;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        apply(arg0: number): V;
        putAll(arg0: Internal.Map_<number, V>): void;
        containsKey(arg0: number): boolean;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        "replace(long,java.lang.Object)"(arg0: number, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ObjectFunction<V>;
        wait(): void;
        putIfAbsent(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        static identity<T>(): Internal.Function<T, T>;
        remove(arg0: number, arg1: any): boolean;
        abstract defaultReturnValue(arg0: V): void;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        "put(long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        "containsKey(long)"(arg0: number): boolean;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        isEmpty(): boolean;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        apply(arg0: number): V;
        replaceAll(arg0: Internal.BiFunction_<number, V, V>): void;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        values(): Internal.ObjectCollection<V>;
        abstract get(arg0: number): V;
        hashCode(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Long2CharFunction;
        putIfAbsent(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractLong2ObjectMap_<V> = AbstractLong2ObjectMap<V>;
    class BlockEntityMechanicalManaPool extends Internal.RecipeTile<vazkii.botania.api.recipe.ManaInfusionRecipe> {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        getComparatorOutput(): number;
        getManaReceiverLevel(): Internal.Level;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        getColor(): Internal.Optional<Internal.DyeColor>;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        canAttachSpark(arg0: Internal.ItemStack_): boolean;
        saveWithoutMetadata(): Internal.CompoundTag;
        isOutputtingPower(): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getAvailableSpaceForMana(): number;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getMaxMana(): number;
        setRemoved(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getOutputKey(): string;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        fabric_hasPersistentAttachments(): boolean;
        clearRemoved(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setColor(arg0: Internal.Optional_<Internal.DyeColor>): void;
        fabric_getAttachments(): Internal.Map<any, any>;
        markDispatchable(): void;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        receiveMana(arg0: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        wait(arg0: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        canReceiveManaFromBursts(): boolean;
        reviveCaps(): void;
        getAttached(type: Internal.AttachmentType_<any>): any;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        renderHUD(arg0: Internal.GuiGraphics_, arg1: Internal.Minecraft_): void;
        getRenderAttachmentData(): any;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setLevel(arg0: Internal.Level_): void;
        notify(): void;
        getInventory(): org.moddingx.libx.inventory.BaseItemStackHandler;
        getBlockPos(): BlockPos;
        isRemoved(): boolean;
        setDispatchable(): void;
        getManaReceiverPos(): BlockPos;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getAttachedSpark(): Internal.ManaSpark;
        invalidateCaps(): void;
        actAsMana(): boolean;
        getBlockState(): Internal.BlockState;
        tick(): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        areIncomingTranfersDone(): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        static invalidateCatalysts(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        saveAdditional(arg0: Internal.CompoundTag_): void;
        saveWithId(): Internal.CompoundTag;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        wait(arg0: number, arg1: number): void;
        getCatalysts(): Internal.List<Internal.Item>;
        getLevel(): Internal.Level;
        attachSpark(arg0: Internal.ManaSpark_): void;
        static setChanged(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        onlyOpCanSetNbt(): boolean;
        serializeNBT(): Internal.Tag;
        getCapability<X>(arg0: Internal.Capability_<X>, arg1: Internal.Direction_): Internal.LazyOptional<X>;
        saveWithFullMetadata(): Internal.CompoundTag;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        isFull(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getInputKey(): string;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getRenderData(): any;
        getModelData(): Internal.ModelData;
        getCurrentMana(): number;
        needsRecipeUpdate(): void;
        equals(arg0: any): boolean;
        get comparatorOutput(): number
        get manaReceiverLevel(): Internal.Level
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get color(): Internal.Optional<Internal.DyeColor>
        get outputtingPower(): boolean
        get availableSpaceForMana(): number
        get maxMana(): number
        get type(): Internal.BlockEntityType<any>
        get outputKey(): string
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set color(arg0: Internal.Optional_<Internal.DyeColor>)
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        get renderAttachmentData(): any
        set level(arg0: Internal.Level_)
        get inventory(): org.moddingx.libx.inventory.BaseItemStackHandler
        get blockPos(): BlockPos
        get removed(): boolean
        get manaReceiverPos(): BlockPos
        get attachedSpark(): Internal.ManaSpark
        get blockState(): Internal.BlockState
        get catalysts(): Internal.List<Internal.Item>
        get level(): Internal.Level
        get full(): boolean
        get inputKey(): string
        get renderData(): any
        get modelData(): Internal.ModelData
        get currentMana(): number
    }
    type BlockEntityMechanicalManaPool_ = BlockEntityMechanicalManaPool;
    class QuadPotatoCannonItem extends Internal.ProjectileWeaponItem implements Internal.CustomArmPoseItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getArmPose(arg0: Internal.ItemStack_, arg1: Internal.AbstractClientPlayer_, arg2: Internal.InteractionHand_): Internal.HumanoidModel$ArmPose;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        static getHeldProjectile(arg0: Internal.LivingEntity_, arg1: Internal.Predicate_<Internal.ItemStack>): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getDefaultProjectileRange(): number;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getAmmoforPreview(arg0: Internal.ItemStack_): Internal.Optional<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getAllSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getSupportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        isCannon(arg0: Internal.ItemStack_): boolean;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defaultProjectileRange(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get allSupportedProjectiles(): Internal.Predicate<Internal.ItemStack>
        get creativeTab(): string
        get supportedHeldProjectiles(): Internal.Predicate<Internal.ItemStack>
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly MAX_DAMAGE: (100) & (number);
        static CLIENT_CURRENT_AMMO: (Internal.ItemStack) & (Internal.ItemStack);
    }
    type QuadPotatoCannonItem_ = QuadPotatoCannonItem;
    class AirBlowerBlock extends Internal.Block implements com.simibubi.create.content.equipment.wrench.IWrenchable, Internal.IPneumaticWrenchable, Internal.IBE<Internal.AirBlowerBlockEntity> {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        onWrenched(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.InteractionHand_): boolean;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        canConnect(arg0: Internal.Direction_, arg1: Internal.BlockEntity_): boolean;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        playRemoveSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        withBlockEntityDo(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Consumer_<Internal.AirBlowerBlockEntity>): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getRotatedBlockState(arg0: Internal.BlockState_, arg1: Internal.Direction_): Internal.BlockState;
        getBlockEntityClass(): typeof Internal.AirBlowerBlockEntity;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getTicker<S extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<S>): Internal.BlockEntityTicker<S>;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        playRotateSound(arg0: Internal.Level_, arg1: BlockPos_): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        static onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getBlockEntityOptional(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.Optional<Internal.AirBlowerBlockEntity>;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.AirBlowerBlockEntity;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        onBlockEntityUse(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Function_<Internal.AirBlowerBlockEntity, InteractionResult>): InteractionResult;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        onWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        onSneakWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): InteractionResult;
        updateAfterWrenched(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_): Internal.BlockState;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static forBlock(arg0: Internal.Block_): Internal.IPneumaticWrenchable;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getBlockEntityType(): Internal.BlockEntityType<Internal.AirBlowerBlockEntity>;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get blockEntityClass(): typeof Internal.AirBlowerBlockEntity
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get blockEntityType(): Internal.BlockEntityType<Internal.AirBlowerBlockEntity>
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly NORTH: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.Property<Internal.Direction>);
        static readonly UP: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly SOUTH: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly DOWN: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly WEST: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly EAST: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly CONNECTION_PROPERTIES: Internal.BooleanProperty[];
    }
    type AirBlowerBlock_ = AirBlowerBlock;
    class SinglePoolElement extends Internal.StructurePoolElement implements Internal.WaystoneStructurePoolElement {
        constructor(arg0: Internal.Either_<ResourceLocation, Internal.StructureTemplate>, arg1: Internal.Holder_<Internal.StructureProcessorList>, arg2: Internal.StructureTemplatePool$Projection_)
        handler$dih000$waystones$place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean, arg10: Internal.CallbackInfoReturnable_<any>): void;
        getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        getClass(): typeof any;
        static projectionCodec<E extends Internal.StructurePoolElement>(): Internal.RecordCodecBuilder<E, Internal.StructureTemplatePool$Projection>;
        notify(): void;
        getGroundLevelDelta(): number;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        isWaystone(): boolean;
        setIsWaystone(arg0: boolean): void;
        static templateCodec<E extends Internal.SinglePoolElement>(): Internal.RecordCodecBuilder<E, Internal.Either<ResourceLocation, Internal.StructureTemplate>>;
        getSettings(arg0: Internal.Rotation_, arg1: Internal.BoundingBox_, arg2: boolean): Internal.StructurePlaceSettings;
        getDataMarkers(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: boolean): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        getType(): Internal.StructurePoolElementType<any>;
        toString(): string;
        getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        notifyAll(): void;
        static processorsCodec<E extends Internal.SinglePoolElement>(): Internal.RecordCodecBuilder<E, Internal.Holder<Internal.StructureProcessorList>>;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): Internal.StructurePoolElement;
        hashCode(): number;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        wait(): void;
        wait(arg0: number): void;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        equals(arg0: any): boolean;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get class(): typeof any
        get groundLevelDelta(): number
        get waystone(): boolean
        set isWaystone(arg0: boolean)
        get projection(): Internal.StructureTemplatePool$Projection
        get type(): Internal.StructurePoolElementType<any>
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        readonly template: Internal.Either<ResourceLocation, Internal.StructureTemplate>;
        readonly processors: Internal.Holder<Internal.StructureProcessorList>;
        static readonly CODEC: Internal.Codec<Internal.SinglePoolElement>;
    }
    type SinglePoolElement_ = SinglePoolElement;
    class MatchBlockTagPredicate implements Internal.IBlockStatePredicate {
        constructor(arg0: ResourceLocation_)
        constructor(arg0: Internal.TagKey_<Internal.Block>)
        getClass(): typeof any;
        write(): Internal.JsonElement;
        test(arg0: Internal.BlockState_): boolean;
        and(...arg0: Internal.IBlockPosPredicate_[]): Internal.IBlockPosPredicate;
        static none(): Internal.IBlockPosPredicate;
        static "read(com.google.gson.JsonElement)"(arg0: Internal.JsonElement_): Internal.IBlockPosPredicate;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static "match(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<Internal.Block>): Internal.IBlockPosPredicate;
        getTag(): Internal.TagKey<Internal.Block>;
        asBlockStatePredicate(): Internal.Predicate<Internal.BlockState>;
        static match(arg0: Internal.BlockState_): Internal.IBlockPosPredicate;
        static read(arg0: Internal.FriendlyByteBuf_): Internal.IBlockPosPredicate;
        static any(): Internal.IBlockPosPredicate;
        getType(): Internal.BlockPosPredicateType<Internal.MatchBlockTagPredicate>;
        cache(): Internal.IBlockPosPredicate;
        simplify(): Internal.IBlockPosPredicate;
        offset(arg0: Vec3i_): Internal.IBlockPosPredicate;
        offset(arg0: number, arg1: number, arg2: number): Internal.IBlockPosPredicate;
        write(arg0: Internal.FriendlyByteBuf_): void;
        test(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        toString(): string;
        notifyAll(): void;
        or(...arg0: Internal.IBlockPosPredicate_[]): Internal.IBlockPosPredicate;
        static createOr(...arg0: Internal.IBlockPosPredicate_[]): Internal.IBlockPosPredicate;
        static match(...arg0: Internal.Block_[]): Internal.IBlockPosPredicate;
        static "match(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): Internal.IBlockPosPredicate;
        static "read(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): Internal.IBlockPosPredicate;
        hashCode(): number;
        static read(arg0: Internal.JsonElement_): Internal.IBlockPosPredicate;
        wait(): void;
        static "match(net.minecraft.world.level.block.state.BlockState)"(arg0: Internal.BlockState_): Internal.IBlockPosPredicate;
        wait(arg0: number): void;
        static match(arg0: Internal.TagKey_<Internal.Block>): Internal.IBlockPosPredicate;
        equals(arg0: any): boolean;
        static createAnd(...arg0: Internal.IBlockPosPredicate_[]): Internal.IBlockPosPredicate;
        not(): Internal.IBlockPosPredicate;
        get class(): typeof any
        get tag(): Internal.TagKey<Internal.Block>
        get type(): Internal.BlockPosPredicateType<Internal.MatchBlockTagPredicate>
        static readonly NAME: ("tag") & (string);
        static readonly CODEC: Internal.Codec<Internal.MatchBlockTagPredicate>;
    }
    type MatchBlockTagPredicate_ = MatchBlockTagPredicate;
    class CarvingMaskPlacement extends Internal.PlacementModifier {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getPositions(arg0: Internal.PlacementContext_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.Stream<BlockPos>;
        static forStep(arg0: Internal.GenerationStep$Carving_): Internal.CarvingMaskPlacement;
        wait(): void;
        type(): Internal.PlacementModifierType<any>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.CarvingMaskPlacement>;
    }
    type CarvingMaskPlacement_ = CarvingMaskPlacement;
    class BFReactorMultiblockData extends Internal.MultiblockData {
        constructor(arg0: igentuman.bfr.common.tile.fusion.TileEntityFusionReactorBlock_)
        getEnergyContainer(arg0: number, arg1: Internal.Direction_): Internal.IEnergyContainer;
        clear(ingredient: Internal.Ingredient_): void;
        updateHeatCapacitors(side: Internal.Direction_): void;
        find(): number;
        getFluidSideFor(): Internal.Direction;
        getMaxEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        setCurrentReactivity(arg0: number): void;
        getFluidTank(arg0: number, arg1: Internal.Direction_): Internal.IExtendedFluidTank;
        getMinInjectionRate(arg0: boolean): number;
        setFormedForce(formed: boolean): void;
        getLastPlasmaTemp(): number;
        getSteamPerTick(arg0: boolean): number;
        getEnergySideFor(): Internal.Direction;
        extractFluid(arg0: number, arg1: number, arg2: Internal.Action_): Internal.FluidStack;
        getTargetReactivity(): number;
        extractFluid(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        getLaserShootCountdown(): number;
        markDirty(): void;
        setEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Direction_): void;
        extractFluid(arg0: Internal.FluidStack_, arg1: Internal.Action_): Internal.FluidStack;
        reactivityUpdateTicksScaled(): number;
        getGasTanks(side: Internal.Direction_): Internal.List<Internal.IGasTank>;
        "extractEnergy(int,mekanism.api.math.FloatingLong,mekanism.api.Action)"(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Action_): Internal.FloatingLong;
        extractFluid(arg0: number, arg1: Internal.Action_): Internal.FluidStack;
        getIgnitionTemperature(arg0: boolean): number;
        extractEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Action_): Internal.FloatingLong;
        getInjectionRate(): number;
        getEnergyContainers(side: Internal.Direction_): Internal.List<Internal.IEnergyContainer>;
        getCurrentReactivity(): number;
        getDirectionsToEmit(pos: BlockPos_): Internal.Set<Internal.Direction>;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        getInverseConduction(arg0: number, arg1: Internal.Direction_): number;
        getBounds(): Internal.VoxelCuboid;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_): boolean;
        getEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        "extractFluid(int,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: number, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        "extractFluid(int,int,mekanism.api.Action)"(arg0: number, arg1: number, arg2: Internal.Action_): Internal.FluidStack;
        getAdjacent(side: Internal.Direction_): Internal.IHeatHandler;
        getInventorySlots(side: Internal.Direction_): Internal.List<Internal.IInventorySlot>;
        getHeight(): number;
        /**
         * @deprecated
        */
        "drain(net.minecraftforge.fluids.FluidStack,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        handleHeat(arg0: number): void;
        getInventorySideFor(): Internal.Direction;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): boolean;
        clear(): void;
        forceUpdateComparatorLevel(): void;
        getAmbientTemperature(side: Internal.Direction_): number;
        wait(arg0: number): void;
        getNeededEnergy(arg0: number): Internal.FloatingLong;
        getPlasmaTemp(): number;
        extractEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FloatingLong;
        getInverseInsulation(arg0: number, arg1: Internal.Direction_): number;
        "insertEnergy(mekanism.api.math.FloatingLong,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FloatingLong;
        getEnergyContainerCount(): number;
        "extractItem(int,int,boolean)"(i: number, i1: number, b: boolean): Internal.ItemStack;
        canHandleHeat(): boolean;
        getSlots(): number;
        kjs$self(): Internal.IItemHandler;
        updateReactivity(): void;
        getMaxCoolant(): number;
        length(): number;
        getTotalHeatCapacity(): number;
        getSlotLimit(arg0: number): number;
        setEnergy(arg0: number, arg1: Internal.FloatingLong_): void;
        height(): number;
        getSlotLimit(arg0: number, arg1: Internal.Direction_): number;
        setTargetReactivity(arg0: number): void;
        getMaxCasingTemperature(arg0: boolean): number;
        canHandleEnergy(): boolean;
        processLaserShoot(arg0: Internal.FloatingLong_): void;
        wait(): void;
        getHeatCapacitor(arg0: number, arg1: Internal.Direction_): Internal.IHeatCapacitor;
        setPlasmaTemp(arg0: number): void;
        getPassiveGeneration(arg0: boolean): Internal.FloatingLong;
        notExternalFormedBiPred<T>(): Internal.BiPredicate<T, Internal.AutomationType>;
        count(): number;
        "handleHeat(int,double)"(arg0: number, arg1: number): void;
        getSlots(arg0: Internal.Direction_): number;
        remove(world: Internal.Level_): void;
        isEmpty(): boolean;
        computerSetInjectionRate(arg0: number): void;
        getInfusionTanks(side: Internal.Direction_): Internal.List<Internal.IInfusionTank>;
        getLastCaseTemp(): number;
        handleHeat(arg0: number, arg1: number): void;
        setShape(shape: Internal.IShape_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getInventorySlot(arg0: number, arg1: Internal.Direction_): Internal.IInventorySlot;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        simulate(): Internal.HeatAPI$HeatTransfer;
        readUpdateTag(arg0: Internal.CompoundTag_): void;
        getCurrentRedstoneLevel(): number;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.ItemStack;
        extractEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.FloatingLong;
        getAllItems(): Internal.List<Internal.ItemStack>;
        "extractFluid(net.minecraftforge.fluids.FluidStack,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: Internal.Action_): Internal.FluidStack;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        getVolume(): number;
        isMutable(): boolean;
        insertEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Action_): Internal.FloatingLong;
        find(ingredient: Internal.Ingredient_): number;
        extractItem(arg0: number, arg1: number, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.ItemStack;
        equals(obj: any): boolean;
        getHeatCapacitorCount(arg0: Internal.Direction_): number;
        "extractFluid(net.minecraftforge.fluids.FluidStack,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        getEfficiency(): number;
        insertFluid(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.FluidStack;
        addTemperatureFromEnergyInput(arg0: Internal.FloatingLong_): void;
        setBurning(arg0: boolean): void;
        updateTemperatures(): void;
        setInjectionRate(arg0: number): void;
        markDirtyComparator(world: Internal.Level_): void;
        getMaxEnergy(arg0: number): Internal.FloatingLong;
        setAdjustment(arg0: number): void;
        getMinPos(): BlockPos;
        writeUpdateTag(arg0: Internal.CompoundTag_): void;
        isItemValid(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): boolean;
        insertEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FloatingLong;
        setChanged(): void;
        "getSlots()"(): number;
        getFluidTanks(side: Internal.Direction_): Internal.List<Internal.IExtendedFluidTank>;
        getTotalHeatCapacity(arg0: Internal.Direction_): number;
        "insertFluid(net.minecraftforge.fluids.FluidStack,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        "getStackInSlot(int)"(i: number): Internal.ItemStack;
        "getSlotLimit(int)"(i: number): number;
        handleHeat(arg0: number, arg1: Internal.Direction_): void;
        getWidth(): number;
        insertFluid(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Action_): Internal.FluidStack;
        getCaseTemp(): number;
        isPositionInsideBounds<T extends Internal.MultiblockData>(structure: mekanism.common.lib.multiblock.Structure_, pos: BlockPos_): boolean;
        getSlurryTanks(side: Internal.Direction_): Internal.List<Internal.ISlurryTank>;
        insertFluid(arg0: Internal.FluidStack_, arg1: Internal.Action_): Internal.FluidStack;
        getHeatCapacitorCount(): number;
        getTanks(): number;
        handleHeat(arg0: number, arg1: number, arg2: Internal.Direction_): void;
        width(): number;
        getHeatCapacitors(side: Internal.Direction_): Internal.List<Internal.IHeatCapacitor>;
        getMaxPlasmaTemperature(arg0: boolean): number;
        insertEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Action_): Internal.FloatingLong;
        resetDirty(): void;
        getEnergyContainerCount(arg0: Internal.Direction_): number;
        "handleHeat(double,net.minecraft.core.Direction)"(arg0: number, arg1: Internal.Direction_): void;
        formedBiPred<T>(): Internal.BiPredicate<T, Internal.AutomationType>;
        getTotalInverseInsulation(arg0: Internal.Direction_): number;
        countNonEmpty(): number;
        insertFluid(arg0: Internal.FluidStack_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        adjustReactivity(arg0: number): boolean;
        isFormed(): boolean;
        toString(): string;
        notifyAll(): void;
        getTotalTemperature(): number;
        getPassiveGeneration(arg0: boolean, arg1: boolean): Internal.FloatingLong;
        isDirty(): boolean;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: Internal.Direction_): number;
        getErrorLevel(): number;
        getNeededEnergy(arg0: number, arg1: Internal.Direction_): Internal.FloatingLong;
        setFluidInTank(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_): void;
        simulateAdjacent(): number;
        isPositionOutsideBounds(pos: BlockPos_): boolean;
        getTanks(arg0: Internal.Direction_): number;
        getEnergy(arg0: number): Internal.FloatingLong;
        onCreated(arg0: Internal.Level_): void;
        getInverseConduction(arg0: number): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getFluidInTank(arg0: number): Internal.FluidStack;
        isInventoryEmpty(arg0: Internal.Direction_): boolean;
        getProductionRate(): Internal.FloatingLong;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        "insertFluid(int,net.minecraftforge.fluids.FluidStack,mekanism.api.Action)"(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Action_): Internal.FluidStack;
        setFluidInTank(arg0: number, arg1: Internal.FluidStack_): void;
        notify(): void;
        getHeatCapacity(arg0: number): number;
        getTotalInverseConduction(): number;
        tick(arg0: Internal.Level_): boolean;
        getFluidInTank(arg0: number, arg1: Internal.Direction_): Internal.FluidStack;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        extractFluid(arg0: number, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FluidStack;
        getTemperature(arg0: number, arg1: Internal.Direction_): number;
        "extractEnergy(mekanism.api.math.FloatingLong,net.minecraft.core.Direction,mekanism.api.Action)"(arg0: Internal.FloatingLong_, arg1: Internal.Direction_, arg2: Internal.Action_): Internal.FloatingLong;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(slot: number, stack: Internal.ItemStack_): void;
        getTotalTemperature(arg0: Internal.Direction_): number;
        getValveData(): Internal.Collection<Internal.IValveHandler$ValveData>;
        canHandleFluid(): boolean;
        count(ingredient: Internal.Ingredient_): number;
        /**
         * @deprecated
        */
        drain(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        isBurning(): boolean;
        getStackInSlot(arg0: number, arg1: Internal.Direction_): Internal.ItemStack;
        getAdjustment(): number;
        notifyAllUpdateComparator(world: Internal.Level_): void;
        getKt(): number;
        meltdownHappened(world: Internal.Level_): void;
        getHeatSideFor(): Internal.Direction;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        "drain(int,net.minecraftforge.fluids.capability.IFluidHandler$FluidAction)"(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        /**
         * @deprecated
        */
        drain(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        isInventoryEmpty(): boolean;
        extractEnergy(arg0: Internal.FloatingLong_, arg1: Internal.Action_): Internal.FloatingLong;
        getMaxSteam(): number;
        "extractFluid(int,mekanism.api.Action)"(arg0: number, arg1: Internal.Action_): Internal.FluidStack;
        computerAdjustReactivity(arg0: number): void;
        getOutsideSide(pos: BlockPos_): Internal.Direction;
        onContentsChanged(): void;
        getStackInSlot(arg0: number): Internal.ItemStack;
        getTemperature(arg0: number): number;
        asContainer(): net.minecraft.world.Container;
        simulateEnvironment(): number;
        extractFluid(arg0: number, arg1: number, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.FluidStack;
        hasInventory(): boolean;
        getTotalInverseConductionCoefficient(arg0: Internal.Direction_): number;
        "insertEnergy(int,mekanism.api.math.FloatingLong,mekanism.api.Action)"(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Action_): Internal.FloatingLong;
        setLastPlasmaTemp(arg0: number): void;
        setVolume(volume: number): void;
        insertEnergy(arg0: number, arg1: Internal.FloatingLong_, arg2: Internal.Direction_, arg3: Internal.Action_): Internal.FloatingLong;
        getTankCapacity(arg0: number): number;
        getMaxPos(): BlockPos;
        /**
         * @deprecated
        */
        fill(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        hashCode(): number;
        isKnownLocation(pos: BlockPos_): boolean;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_, arg2: Internal.Direction_): void;
        isFluidValid(arg0: number, arg1: Internal.FluidStack_, arg2: Internal.Direction_): boolean;
        getHeatCapacity(arg0: number, arg1: Internal.Direction_): number;
        getPigmentTanks(side: Internal.Direction_): Internal.List<Internal.IPigmentTank>;
        getTankCapacity(arg0: number, arg1: Internal.Direction_): number;
        get fluidSideFor(): Internal.Direction
        set currentReactivity(arg0: number)
        set formedForce(formed: boolean)
        get lastPlasmaTemp(): number
        get energySideFor(): Internal.Direction
        get targetReactivity(): number
        get laserShootCountdown(): number
        get injectionRate(): number
        get currentReactivity(): number
        get class(): typeof any
        get bounds(): Internal.VoxelCuboid
        get height(): number
        get inventorySideFor(): Internal.Direction
        get plasmaTemp(): number
        get energyContainerCount(): number
        get slots(): number
        get maxCoolant(): number
        get totalHeatCapacity(): number
        set targetReactivity(arg0: number)
        set plasmaTemp(arg0: number)
        get empty(): boolean
        get lastCaseTemp(): number
        set shape(shape: Internal.IShape_)
        get currentRedstoneLevel(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get volume(): number
        get mutable(): boolean
        get efficiency(): number
        set burning(arg0: boolean)
        set injectionRate(arg0: number)
        set adjustment(arg0: number)
        get minPos(): BlockPos
        get "slots()"(): number
        get width(): number
        get caseTemp(): number
        get heatCapacitorCount(): number
        get tanks(): number
        get formed(): boolean
        get totalTemperature(): number
        get dirty(): boolean
        get errorLevel(): number
        get productionRate(): Internal.FloatingLong
        get totalInverseConduction(): number
        get valveData(): Internal.Collection<Internal.IValveHandler$ValveData>
        get burning(): boolean
        get adjustment(): number
        get kt(): number
        get heatSideFor(): Internal.Direction
        get inventoryEmpty(): boolean
        get maxSteam(): number
        set lastPlasmaTemp(arg0: number)
        set volume(volume: number)
        get maxPos(): BlockPos
        static readonly MAX_INJECTION: (98) & (number);
        hotCoolantTank: Internal.IGasTank;
        explodeFlag: boolean;
        heatCapacitor: Internal.IHeatCapacitor;
        fuelTank: Internal.IGasTank;
        energyContainer: Internal.IEnergyContainer;
        tritiumTank: Internal.IGasTank;
        liquidCoolantTank: Internal.IExtendedFluidTank;
        deuteriumTank: Internal.IGasTank;
        plasmaTemperature: number;
        gasCoolantTank: Internal.IGasTank;
        laserShootMinEnergy: number;
    }
    type BFReactorMultiblockData_ = BFReactorMultiblockData;
    class Convertable <RAW> {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static "of(net.minecraftforge.fluids.FluidStack)"(value: Internal.FluidStack_): Internal.Convertable<Internal.FluidStack>;
        hashCode(): number;
        convert(helper: Internal.BaseComputerHelper_): any;
        static of(value: Internal.FluidStack_): Internal.Convertable<Internal.FluidStack>;
        wait(): void;
        static of<RAW>(value: RAW, converter: Internal.BiFunction_<Internal.BaseComputerHelper, RAW, any>): Internal.Convertable<RAW>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static "of(mekanism.api.chemical.ChemicalStack)"(value: Internal.ChemicalStack_<any>): Internal.Convertable<Internal.ChemicalStack<any>>;
        static of(value: Internal.ChemicalStack_<any>): Internal.Convertable<Internal.ChemicalStack<any>>;
        get class(): typeof any
    }
    type Convertable_<RAW> = Convertable<RAW>;
    class ISyncableEntity$SyncReason extends Internal.Enum<Internal.ISyncableEntity$SyncReason> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.ISyncableEntity$SyncReason;
        toString(): string;
        notifyAll(): void;
        compareTo(arg0: Internal.ISyncableEntity$SyncReason_): number;
        static values(): Internal.ISyncableEntity$SyncReason[];
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        "compareTo(it.zerono.mods.zerocore.lib.data.nbt.ISyncableEntity$SyncReason)"(arg0: Internal.ISyncableEntity$SyncReason_): number;
        name(): string;
        hashCode(): number;
        isNetworkUpdate(): boolean;
        isFullSync(): boolean;
        getDeclaringClass(): typeof Internal.ISyncableEntity$SyncReason;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ISyncableEntity$SyncReason>>;
        get class(): typeof any
        get networkUpdate(): boolean
        get fullSync(): boolean
        get declaringClass(): typeof Internal.ISyncableEntity$SyncReason
        static readonly FullSync: (Internal.ISyncableEntity$SyncReason) & (Internal.ISyncableEntity$SyncReason);
        static readonly NetworkUpdate: (Internal.ISyncableEntity$SyncReason) & (Internal.ISyncableEntity$SyncReason);
    }
    type ISyncableEntity$SyncReason_ = ISyncableEntity$SyncReason | "networkupdate" | "fullsync";
    class OtherworldSaplingNaturalBlock extends Internal.SaplingBlock implements Internal.IOtherworldBlock {
        constructor(arg0: any_, arg1: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getUncoveredBlock(): Internal.Block;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getCoveredBlock(): Internal.Block;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        mayPlaceOn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getItem(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        getPlayerHarvestTier(arg0: Internal.Player_, arg1: Internal.ItemStack_): Internal.OtherworldBlockTier;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        getTier(): Internal.OtherworldBlockTier;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        advanceTree(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.RandomSource_): void;
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        getHarvestState(arg0: Internal.Player_, arg1: Internal.BlockState_, arg2: Internal.ItemStack_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        get uncoveredBlock(): Internal.Block
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get coveredBlock(): Internal.Block
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get tier(): Internal.OtherworldBlockTier
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type OtherworldSaplingNaturalBlock_ = OtherworldSaplingNaturalBlock;
    interface FPFragmentBuilder extends Internal.ShaderBuilder {
        abstract codeAppend(arg0: string): void;
        abstract codePrependf(arg0: string, ...arg1: any[]): void;
        abstract codeAppendf(arg0: string, ...arg1: any[]): void;
        abstract getMangledName(arg0: string): string;
    }
    type FPFragmentBuilder_ = FPFragmentBuilder;
    interface EncasedBlock {
        abstract getCasing(): Internal.Block;
        handleEncasing(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: Internal.Player_, arg5: Internal.InteractionHand_, arg6: Internal.BlockHitResult_): void;
        get casing(): Internal.Block
        (): Internal.Block_;
    }
    type EncasedBlock_ = (()=> Internal.Block_) | EncasedBlock;
    class Direction8 extends Internal.Enum<Internal.Direction8> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        compareTo(arg0: Internal.Direction8_): number;
        "compareTo(net.minecraft.core.Direction8)"(arg0: Internal.Direction8_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.Direction8;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Direction8>>;
        name(): string;
        getDirections(): Internal.Set<Internal.Direction>;
        hashCode(): number;
        getStepX(): number;
        getStepZ(): number;
        getDeclaringClass(): typeof Internal.Direction8;
        ordinal(): number;
        wait(): void;
        static values(): Internal.Direction8[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get directions(): Internal.Set<Internal.Direction>
        get stepX(): number
        get stepZ(): number
        get declaringClass(): typeof Internal.Direction8
        static readonly NORTH_EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly NORTH_WEST: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH_EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH_WEST: (Internal.Direction8) & (Internal.Direction8);
        static readonly NORTH: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH: (Internal.Direction8) & (Internal.Direction8);
        static readonly WEST: (Internal.Direction8) & (Internal.Direction8);
    }
    type Direction8_ = "north_west" | "west" | "north_east" | "east" | "south_west" | "south" | "north" | Direction8 | "south_east";
    class IRSSwitchable$RSMode extends Internal.Enum<Internal.IRSSwitchable$RSMode> {
        compareTo(arg0: Internal.IRSSwitchable$RSMode_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        getDeclaringClass(): typeof Internal.IRSSwitchable$RSMode;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.IRSSwitchable$RSMode;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.IRSSwitchable$RSMode>>;
        name(): string;
        canRun(arg0: boolean): boolean;
        hashCode(): number;
        next(arg0: boolean): this;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "compareTo(com.brandon3055.brandonscore.lib.IRSSwitchable$RSMode)"(arg0: Internal.IRSSwitchable$RSMode_): number;
        static values(): Internal.IRSSwitchable$RSMode[];
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.IRSSwitchable$RSMode
        static readonly NEVER_ACTIVE: (Internal.IRSSwitchable$RSMode) & (Internal.IRSSwitchable$RSMode);
        index: number;
        static readonly ALWAYS_ACTIVE: (Internal.IRSSwitchable$RSMode) & (Internal.IRSSwitchable$RSMode);
        static readonly ACTIVE_LOW: (Internal.IRSSwitchable$RSMode) & (Internal.IRSSwitchable$RSMode);
        static readonly ACTIVE_HIGH: (Internal.IRSSwitchable$RSMode) & (Internal.IRSSwitchable$RSMode);
    }
    type IRSSwitchable$RSMode_ = "never_active" | IRSSwitchable$RSMode | "always_active" | "active_high" | "active_low";
    abstract class AbstractByteBufAllocator implements Internal.ByteBufAllocator {
        compositeDirectBuffer(arg0: number): Internal.CompositeByteBuf;
        getClass(): typeof any;
        compositeHeapBuffer(arg0: number): Internal.CompositeByteBuf;
        compositeBuffer(): Internal.CompositeByteBuf;
        ioBuffer(): Internal.ByteBuf;
        heapBuffer(arg0: number): Internal.ByteBuf;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        calculateNewCapacity(arg0: number, arg1: number): number;
        directBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        buffer(): Internal.ByteBuf;
        toString(): string;
        compositeDirectBuffer(): Internal.CompositeByteBuf;
        heapBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        notifyAll(): void;
        heapBuffer(): Internal.ByteBuf;
        ioBuffer(arg0: number): Internal.ByteBuf;
        compositeBuffer(arg0: number): Internal.CompositeByteBuf;
        directBuffer(): Internal.ByteBuf;
        abstract isDirectBufferPooled(): boolean;
        hashCode(): number;
        directBuffer(arg0: number): Internal.ByteBuf;
        buffer(arg0: number, arg1: number): Internal.ByteBuf;
        ioBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        wait(): void;
        wait(arg0: number): void;
        compositeHeapBuffer(): Internal.CompositeByteBuf;
        equals(arg0: any): boolean;
        buffer(arg0: number): Internal.ByteBuf;
        get class(): typeof any
        get directBufferPooled(): boolean
    }
    type AbstractByteBufAllocator_ = AbstractByteBufAllocator;
    interface DoubleToIntFunction {
        abstract applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToIntFunction_ = ((arg0: number)=> number) | DoubleToIntFunction;
    class PiercingPrismLens extends Internal.AbstractPrismLens {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: Internal.DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        zeta$setHumanoidArmorModel(arg0: Internal.HumanoidArmorModelGetter_): void;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        getBarColor(arg0: Internal.ItemStack_): number;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: Internal.DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        attachCapability(capabilityBuilder: Internal.CapabilityBuilder_<any, any, any>): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        shoot(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.EntityProjectileSpell_, arg3: Vec3d_): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        canConvert(arg0: Internal.EntityProjectileSpell_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        modifyReturnValue$eec000$quark$overrideStackedOnOther(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        modifyReturnValue$eec000$quark$overrideOtherStackedOnMe(arg0: boolean, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: Internal.Slot_, arg4: Internal.ClickAction_, arg5: Internal.Player_, arg6: Internal.SlotAccess_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        zeta$setBlockEntityWithoutLevelRenderer(arg0: Internal.BlockEntityWithoutLevelRenderer_): void;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        handler$dbk000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type PiercingPrismLens_ = PiercingPrismLens;
    class ScatteredOreFeature extends Feature<Internal.OreConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.OreConfiguration>)
        getClass(): typeof any;
        place(arg0: Internal.FeaturePlaceContext_<Internal.OreConfiguration>): boolean;
        static isStone(arg0: Internal.BlockState_): boolean;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.OreConfiguration, Feature<Internal.OreConfiguration>>>;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        place(arg0: Internal.OreConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type ScatteredOreFeature_ = ScatteredOreFeature;
    interface FileNotFoundAction {
        copyData(arg0: Internal.InputStream_): this;
        "copyData(java.nio.file.Path)"(arg0: Internal.Path_): this;
        "copyData(java.io.File)"(arg0: Internal.File_): this;
        "copyData(java.net.URL)"(arg0: Internal.URL_): this;
        copyData(arg0: Internal.URL_): this;
        abstract run(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): boolean;
        copyData(arg0: Internal.File_): this;
        copyResource(arg0: string): this;
        "copyData(java.io.InputStream)"(arg0: Internal.InputStream_): this;
        copyData(arg0: Internal.Path_): this;
        (arg0: Internal.Path, arg1: Internal.ConfigFormat<any>): boolean;
        readonly THROW_ERROR: Internal.FileNotFoundAction;
        readonly READ_NOTHING: Internal.FileNotFoundAction;
        readonly CREATE_EMPTY: Internal.FileNotFoundAction;
    }
    type FileNotFoundAction_ = FileNotFoundAction | ((arg0: Internal.Path, arg1: Internal.ConfigFormat<any>)=> boolean);
    interface SurfaceMaterialProvider {
        create(top: Internal.BlockState_, under: Internal.BlockState_, alt: Internal.BlockState_, genFloorRule: boolean): this;
        abstract getAltTopMaterial(): Internal.BlockState;
        abstract getUnderMaterial(): Internal.BlockState;
        abstract generateFloorRule(): boolean;
        abstract surface(): Internal.SurfaceRuleBuilder;
        abstract getTopMaterial(): Internal.BlockState;
        get altTopMaterial(): Internal.BlockState
        get underMaterial(): Internal.BlockState
        get topMaterial(): Internal.BlockState
        readonly CODEC: Internal.Codec<Internal.SurfaceMaterialProvider>;
    }
    type SurfaceMaterialProvider_ = SurfaceMaterialProvider;
}
declare namespace snownee.jade.api.theme {
    class Theme {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        opacity: number;
        bottomProgressFailureColor: number;
        textShadow: boolean;
        backgroundTextureUV_withIcon: number[];
        backgroundColor: number;
        backgroundTexture_withIcon: ResourceLocation;
        static readonly DARK: (snownee.jade.api.theme.Theme) & (snownee.jade.api.theme.Theme);
        id: ResourceLocation;
        squareBorder: boolean;
        bottomProgressNormalColor: number;
        hidden: boolean;
        backgroundTextureUV: number[];
        failureColor: number;
        backgroundTexture: ResourceLocation;
        readonly padding: number[];
        dangerColor: number;
        itemAmountColor: number;
        readonly borderColor: number[];
        bottomProgressOffset: number[];
        infoColor: number;
        successColor: number;
        titleColor: number;
        lightColorScheme: boolean;
        normalColor: number;
        warningColor: number;
        boxBorderColor: number;
    }
    type Theme_ = Theme;
}
declare namespace earth.terrarium.adastra.common.blocks.pipes {
    class PipeBlock extends Internal.BasicEntityBlock implements Internal.TransferablePipe, Internal.Wrenchable, Internal.SimpleWaterloggedBlock {
        constructor(transferRate: number, type: Internal.TransferablePipe$Type_, size: number, properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        static preventCreativeDropFromBottomPart(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, player: Internal.Player_): void;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(state: Internal.BlockState_): Internal.RenderShape;
        getBaseBlockState(): Internal.BlockState;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(pos: BlockPos_, state: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        static getDirectionByVec(hit: Vec3d_, pos: BlockPos_): Internal.Optional<Internal.Direction>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(state: Internal.BlockState_): Internal.FluidState;
        transferRate(): number;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        entity(state: Internal.BlockState_): Internal.BlockEntityType<any>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        handler$cof000$bclib$appendSurvivalBlock(itemStack: Internal.ItemStack_, blockGetter: Internal.BlockGetter_, list: Internal.List_<any>, tooltipFlag: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        static createTickerHelper<E extends Internal.BlockEntity, A extends Internal.BlockEntity>(arg0: Internal.BlockEntityType_<A>, arg1: Internal.BlockEntityType_<E>, arg2: Internal.BlockEntityTicker_<E>): Internal.BlockEntityTicker<A>;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(level: Internal.Level_, state: Internal.BlockState_, type: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(state: Internal.BlockState_, direction: Internal.Direction_, neighborState: Internal.BlockState_, level: Internal.LevelAccessor_, pos: BlockPos_, neighborPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        static getConnectedDirections(state: Internal.BlockState_): Internal.Direction[];
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        type(): Internal.TransferablePipe$Type;
        onWrench(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, side: Internal.Direction_, user: Internal.Player_, hitPos: Vec3d_): void;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, newState: Internal.BlockState_, moved: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        handler$cao000$betterend$be_getDroppedStacks(state: Internal.BlockState_, builder: Internal.LootParams$Builder_, info: Internal.CallbackInfoReturnable_<any>): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static makeShape(state: Internal.BlockState_, size: number): Internal.VoxelShape;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        static getBaseOf(state: Internal.BlockState_): Internal.BlockState;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, placer: Internal.LivingEntity_, stack: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(stack: Internal.ItemStack_, level: Internal.BlockGetter_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flag: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get baseBlockState(): Internal.BlockState
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly CONNECTED_WEST: Internal.EnumProperty<Internal.PipeProperty>;
        static readonly CONNECTED_EAST: Internal.EnumProperty<Internal.PipeProperty>;
        static readonly CONNECTED_NORTH: Internal.EnumProperty<Internal.PipeProperty>;
        static readonly CONNECTED_SOUTH: Internal.EnumProperty<Internal.PipeProperty>;
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly CONNECTED_DOWN: Internal.EnumProperty<Internal.PipeProperty>;
        static readonly DIRECTION_TO_CONNECTION: ({[key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>}) & (Internal.EnumMap<Internal.Direction, Internal.EnumProperty<Internal.PipeProperty>>);
        static readonly CONNECTED_UP: Internal.EnumProperty<Internal.PipeProperty>;
    }
    type PipeBlock_ = PipeBlock;
}
declare namespace icyllis.arc3d.compiler {
    class SymbolTable {
        getClass(): typeof any;
        getArrayType(type: icyllis.arc3d.compiler.tree.Type_, size: number): icyllis.arc3d.compiler.tree.Type;
        toString(): string;
        findBuiltinSymbol(name: string): icyllis.arc3d.compiler.tree.Symbol;
        notifyAll(): void;
        isType(name: string): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isBuiltinType(name: string): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        find(name: string): icyllis.arc3d.compiler.tree.Symbol;
        getParent(): this;
        insert<T extends icyllis.arc3d.compiler.tree.Symbol>(context: icyllis.arc3d.compiler.Context_, symbol: T): T;
        isBuiltin(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get parent(): icyllis.arc3d.compiler.SymbolTable
        get builtin(): boolean
    }
    type SymbolTable_ = SymbolTable;
}
