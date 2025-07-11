# The AI Cloud: A unified platform for AI workloads - Vercel

[View on Vercel Blog](https://vercel.com/blog/the-ai-cloud-a-unified-platform-for-ai-workloads)

## Vercelが提供するAIクラウド: AIワークロード向けの統合プラットフォーム

Vercelは、従来のWebサイトからフルスタックアプリケーションまで、様々な開発を支援してきた実績を活かし、AI時代に対応したプラットフォーム「AI Cloud」を発表しました。このプラットフォームは、AI機能やアプリケーションを構築するためのツール群を提供し、開発者がインフラに煩わされることなく、製品開発に集中できる環境を実現します。

**AI Cloudの主な特徴:**

*   **AI SDKとAI Gateway:** あらゆるモデルやツールとの連携を可能にし、コードを変更することなくモデルの切り替えを容易にします。AI Gatewayは、APIキーの管理、プロバイダーアカウントの管理、リトライやフォールバックによる可用性の向上、パフォーマンスの最適化を提供します。
*   **Fluid Compute:** 高い同時実行性、低レイテンシ、コスト効率の高いAI実行を実現します。従来のサーバーレスモデルにおけるコールドスタート、手動のスケーリング、過剰なプロビジョニング、非効率な同時実行などの課題を解決し、アイドル時間が多いAIワークロード（推論、エージェントなど）において最大90%のコスト削減を実現します。
*   **ツールサポート、MCPサーバー、キュー:** 自律的なアクションとバックグラウンドタスクの実行を支援します。特に、Anthropicが提唱するMCP（Message-Passing Computing）サーバーのサポートを簡素化し、エージェントによる主要なアプリケーション機能へのアクセスを容易にします。
*   **セキュアサンドボックス:** エージェントが生成した信頼できないコードを安全に実行します。Fluid Compute上で動作し、隔離されたサーバーを一時的に起動し、安全な環境を提供します。
*   **Observability (可観測性):** エージェントアプリケーションの成長に伴い重要となる、コンテキスト、メモリ、推論チェーンの可視化を支援します。遅いエージェントのデバッグ、ボトルネックの特定、リグレッションの監視を容易にします。
*   **BotID:** 高度なボットから機密性の高いルートを保護します。AIエージェントやLLM呼び出しをトリガーするエンドポイントなど、自動化された悪用に対して効果的な防御を提供します。

AI Cloudは、コンバーセーショナルAIフロントエンドから自律エージェントの群れまで、インフラストラクチャやリソースの追加オーバーヘッドなしに構築し、反復することを可能にします。Vercelは、このAI Cloudを通じて、開発者が単にアプリを書くだけでなく、エージェントを定義するような、新たなWebの時代を支援することを目指しています。
---
# Vercel Blob now available in all Vercel Regions - Vercel

[View on Vercel Blog](https://vercel.com/changelog/vercel-blob-now-available-in-all-vercel-regions)

## Vercel Blob が全 Vercel リージョンで利用可能に

Vercel Blob が、19 のすべての Vercel リージョンで利用可能になりました。これにより、Functions やユーザーに近いリージョンを選択することで、アップロード速度の最適化や、必要に応じてデータ所在地の要件への準拠が可能になります。

リージョンの選択は、Vercel ダッシュボードでの作成時、または Vercel CLI (バージョン 44.3.0) を使用して行うことができます。

Vercel Blob に関する詳細については、ドキュメントをご覧ください。

---
# How to Unit Test MapStruct Generated Mappers | Baeldung

[View on Baeldung](https://feeds.feedblitz.com/~/921461663/0/baeldung~How-to-Unit-Test-MapStruct-Generated-Mappers)

## MapStructで生成されたマッパーの単体テスト方法 | Baeldung

この記事では、JavaプロジェクトでMapStructを使用して生成されたマッパーを持つクラスの単体テストを作成する方法について解説しています。

**1. はじめに**
MapStructは、Javaオブジェクト間のマッピングを効率的に行うための強力なライブラリです。この記事では、MapStructで生成されたマッパーに依存するクラスの単体テストを書く方法を紹介します。

**2. セットアップ**
MapStructを使用するには、pom.xmlにMaven依存関係を追加する必要があります。
```xml
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct</artifactId>
    <version>1.6.3</version>
</dependency>
```
Springのテストケースでは、spring-contextとspring-testモジュールも必要です。

**3. テストシナリオの準備**
一般的に、マッピングライブラリは、永続化層とのやり取りの前にDTOからエンティティへの変換に使用されます。
*   **3.1. DTO:** MediaDtoを定義し、マッピングのソースとします。
*   **3.2. エンティティ:** Mediaクラスを定義し、マッピングのターゲットとします。
*   **3.3. マッパー:** MediaMapperインターフェースを定義し、DTOとエンティティ間のマッピングを行います。
```java
@Mapper
public interface MediaMapper {
    MediaDto toDto(Media media);
    Media toEntity(MediaDto mediaDto);
}
```
*   **3.4. Spring Bean Mapper:** MediaSpringMapperを作成し、Springコンテキストで利用できるようにします。
```java
@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface MediaSpringMapper extends MediaMapper {
}
```
*   **3.5. テスト対象のクラス:** MediaServiceはMediaMapperインターフェースを使用し、テストで生成されたMediaMapperインスタンスまたはモックされたインスタンスのいずれかを使用できます。

**4. モックされたマッパーを使用したテスト**
このセクションでは、生成されたマッパーの代わりにモックされたマッパーを使用する単体テストの作成方法を説明します。
*   **Mockitoを使用したモックマッパーのテスト:**  MediaServiceインスタンスをモックされたMediaMapperでインスタンス化し、Mockitoを使用してテストを行います。
```java
@Test
public void whenMockedMapperIsUsed_thenMockedValuesAreMapped() {
    MediaMapper mockMediaMapper = mock(MediaMapper.class);
    Media mockedMedia = new Media(5L, "Title 5");
    when(mockMediaMapper.toEntity(any())).thenReturn(mockedMedia);
    MediaService mediaService = new MediaService(mockMediaMapper);
    MediaDto mediaDto = new MediaDto(1L, "title 1");
    Media persisted = mediaService.persistMedia(mediaDto);
    verify(mockMediaMapper).toEntity(mediaDto);
    assertEquals(mockedMedia.getId(), persisted.getId());
    assertEquals(mockedMedia.getTitle(), persisted.getTitle());
}
```
*   **Springでのモックマッパーのテスト:**  Springコンテキストを設定し、@MockitoBeanを使用してMediaSpringMapperをモックします。
```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Config.class)
public class MediaServiceSpringMockedMapperTest {
    @Autowired
    MediaService mediaService;
    @MockitoBean
    MediaSpringMapper mockMediaMapper;
    @Test
    public void whenMockedSpringMapperIsUsed_thenMockedValuesAreMapped() {
        Media mockedMedia = new Media(12L, "title 12");
        when(mockMediaMapper.toEntity(ArgumentMatchers.any())).thenReturn(mockedMedia);
        MediaDto mediaDto = new MediaDto(1L, "title 1");
        Media persisted = mediaService.persistMedia(mediaDto);
        verify(mockMediaMapper).toEntity(mediaDto);
        assertEquals(mockedMedia.getId(), persisted.getId());
        assertEquals(mockedMedia.getTitle(), persisted.getTitle());
    }
}
```

**5. 生成されたマッパーを使用したテスト**
マッパーのモックではなく、MapStructライブラリで生成された実際のマッパーインスタンスを使用するテストも可能です。
*   **生成されたマッパーのテスト:**  Mappers.getMapper()を使用してMediaMapperインスタンスをMediaServiceに注入します。
```java
@Test
public void whenGeneratedMapperIsUsed_thenActualValuesAreMapped() {
    MediaService mediaService = new MediaService(Mappers.getMapper(MediaMapper.class));
    MediaDto mediaDto = new MediaDto(1L, "title 1");
    Media persisted = mediaService.persistMedia(mediaDto);
    assertEquals(mediaDto.getId(), persisted.getId());
    assertEquals(mediaDto.getTitle(), persisted.getTitle());
}
```
*   **Springでの生成されたマッパーのテスト:**  SpringコンテキストにMediaSpringMapperImplクラスを含めます。
```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { Config.class, MediaSpringMapperImpl.class })
public class MediaServiceSpringGeneratedMapperTest {
    @Test
    public void whenGeneratedSpringMapperIsUsed_thenActualValuesAreMapped() {
        MediaDto mediaDto = new MediaDto(1L, "title 1");
        Media persisted = mediaSpringService.persistMedia(mediaDto);
        assertEquals(mediaDto.getId(), persisted.getId());
        assertEquals(mediaDto.getTitle(), persisted.getTitle());
    }
}
```

**6. まとめ**
この記事では、MapStructマッパーを利用するクラスのテスト方法を、Springアプリケーションのコンテキストで説明しました。モックマッパーと生成されたマッパーの両方を使用したテストケースの例を提供し、単体テストの作成を支援します。

---
# Modular Ktor: Building Backends for Scale | The Kotlin Blog

[View on JetBrains Blog (Kotlin)](https://blog.jetbrains.com/kotlin/2025/07/modular-ktor-building-backends-for-scale/)

## Modular Ktor: スケール可能なバックエンド構築

このブログ記事では、Ktor を使用してモジュール性の高いバックエンドを構築するための技術を紹介しています。Ktor は、軽量で柔軟性の高い Web アプリケーション構築のためのフレームワークであり、大規模なプロジェクトに適した構造を可能にします。

**なぜモジュール性が重要なのか？**

Ktor は、実装の直接性と透明性から人気がありますが、プロジェクトの規模が大きくなると、将来のニーズに対応するためにモジュール化が不可欠になります。モジュール化により、アプリケーションを小さな独立した部分に分割し、全体を変更することなく機能の一部を置き換えることができるようになります。

**Ktor におけるモジュール**

*   **Ktor モジュールとは？** Application の拡張関数であり、サーバー起動時に実行されます。 Ktor 3.2 からは、サスペンド関数もモジュールとして使用できます。
*   **Application とは？** リクエストが処理される際に実行されるビジネスロジックのフックを保持するコンテナです。
*   **Ktor モジュールでできること** モジュールは、EmbeddedServer インスタンスから直接参照したり、設定ファイルから参照したりできます。設定ファイルからの参照により、実行時にサーバーの動作を変更できます。

モジュール間の依存関係を繋ぐ方法として、以下の 3 つが紹介されています。

1.  **スタックを使用する:** モジュールを他の関数呼び出しと同様に扱い、コンパイル時に強く結合させる方法。単一リポジトリでは有効ですが、複数のリポジトリやチームで作業する場合は、モジュールの交換ができなくなるため、調整のオーバーヘッドが増える可能性があります。
2.  **Application Attributes:** `Application.attributes` プロパティ（実際には `Map<String, Any>`）を使用して、モジュール間で参照を渡します。これにより、モジュール間の直接的な参照を回避し、疎結合を実現できます。これは、基本的な制御の反転（IoC）コンテナとしても機能します。ただし、大規模なプロジェクトでは制限があります。
3.  **外部ライブラリ:** Kodein や Koin などの Kotlin の IoC ライブラリを使用することで、より高度なモジュール間の共有を実現できます。また、Kotlin-inject、Dagger、Anvil などのアノテーションとコンパイラプラグインを使用したライブラリも存在します。

**Ktor の依存性注入**

Ktor 3.2 では、モジュール間の依存関係の管理を簡素化するための新しい DI プラグインが導入されました。これにより、開発者エクスペリエンスが向上し、プラットフォームとの統合が深まりました。

*   **プラグイン DSL:** ライブラリに慣れている開発者には、DSL が馴染みやすいでしょう。クラス参照から型を宣言することもでき、コンストラクタの引数は他の宣言済みの型から自動的に入力されます。
*   **ファイル設定:** ファイル設定で特定の型をターゲットにすることで、サーバーの動作を変更できます。
*   **@Serializable モジュールパラメータ:** モジュールパラメータだけでなく、モジュール関数自体も注入できます。

DI プラグインを使用すると、単体テストを簡単に行うことができます。また、プロジェクトを小さな Gradle モジュールに分割しやすくなり、ドメイン中心のアーキテクチャを採用する機会を提供します。

**まとめ**

この記事では、Ktor におけるモジュールの基本と、依存性注入ツールを利用してモジュール間でコードを共有する方法について説明しました。

---
# Passkey への道 #4: 文字列の限界 | blog.jxck.io

[View on blog.jxck.io](https://blog.jxck.io/entries/2025-07-11/load-to-passkey-4.html)

## Passkey への道 #4: 文字列の限界 - 要約

本記事は、パスワードとTOTPの課題を克服するためのパスワードマネージャーの有効性と限界について考察しています。

**パスワードマネージャーの利点と限界:**

*   パスワードマネージャーは、パスワードの自動生成、暗号化保存、TOTPの紐付け、自動入力といった機能を備え、パスワード管理を大幅に改善します。
*   しかし、近年増加している**Infostealer**と呼ばれるマルウェアの脅威に対抗しきれないという問題があります。Infostealerは、ユーザーのローカル情報を盗み出すように設計されており、パスワードマネージャーが安全に保存していても、その情報を盗み出す可能性があります。

**Infostealerの脅威と対策の難しさ:**

*   Infostealerは、フィッシング詐欺や、悪意のあるソフトウェアのインストールなど、様々な方法で感染します。
*   ローカルに保存されたパスワードなどの情報は、暗号化されていても、Infostealerがユーザー権限でアクセスできるため、解読される可能性があります。
*   OSは重要な情報を隠すためのAPI（MacのKeyChain、LinuxのKwallet、WindowsのDPAPIなど）を提供していますが、攻撃耐性に限界があります。Windows Chromeでは、App-Bound Encryptionへの移行が進められていますが、完璧ではありません。

**文字列の限界とPasskeyへの期待:**

*   パスワードは、最終的に`<input type=password>`を通じて平文で入力されるため、Infostealerに盗まれるリスクがあります。
*   平文のパスワードを完全に守ることは非常に困難です。
*   解決策として、平文ではなく暗号化したままパスワードをサービスに送信し、サービス側のみが解読できるような仕組み、つまり**Passkey**への期待が高まっています。
